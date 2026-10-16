# Portable single-container deployment: React build + Python/Qiskit simulation.
FROM node:22-alpine AS frontend
WORKDIR /build
COPY frontend/package.json frontend/package.json
COPY frontend/vite.config.js frontend/tsconfig.json frontend/index.html frontend/
COPY frontend/src frontend/src
RUN cd frontend && npm install --no-audit --no-fund && npm run build

FROM python:3.11-slim
WORKDIR /app
ENV PYTHONUNBUFFERED=1 PYTHONDONTWRITEBYTECODE=1
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY api ./api
COPY src ./src
COPY docs ./docs
COPY frontend/package.json ./frontend/package.json
COPY --from=frontend /build/frontend/dist ./frontend/dist
RUN mkdir -p results figures
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=5s --start-period=45s CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/api/health',timeout=3)" || exit 1
CMD ["uvicorn", "api.server:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]
