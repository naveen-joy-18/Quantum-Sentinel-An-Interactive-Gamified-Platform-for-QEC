@echo off
echo ====================================================================
echo Starting Quantum Sentinel Research Backend Server (FastAPI / Uvicorn)
echo ====================================================================
cd /d "%~dp0"
if exist ".\.venv\Scripts\python.exe" (
    .\.venv\Scripts\python.exe -m uvicorn api.server:app --host 127.0.0.1 --port 8000
) else (
    python -m uvicorn api.server:app --host 127.0.0.1 --port 8000
)
pause
