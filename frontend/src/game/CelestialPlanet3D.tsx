import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CelestialPlanet3DProps {
  sectorTitle?: string;
  codename?: string;
  onTargetClick?: () => void;
}

export default function CelestialPlanet3D({
  sectorTitle = 'GJ 504B',
  codename = 'SEC-01',
  onTargetClick,
}: CelestialPlanet3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || 500;
    let height = mount.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    // 2. Procedural High-Detail Coral (#FF6B5A) & Teal (#14B8A6) Planet Texture
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 1024;
    texCanvas.height = 512;
    const ctx = texCanvas.getContext('2d');
    if (ctx) {
      // Base deep cosmic slate obsidian gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
      bgGrad.addColorStop(0, '#061017');
      bgGrad.addColorStop(0.35, '#0c222c');
      bgGrad.addColorStop(0.7, '#081720');
      bgGrad.addColorStop(1, '#040b10');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1024, 512);

      // Swirling atmospheric bands in Teal (#14B8A6) & Coral (#FF6B5A)
      for (let y = 0; y < 512; y += 4) {
        const normY = y / 512;
        const latWave = Math.sin(normY * Math.PI * 6);
        const isTeal = (y % 16) < 8;
        const col = isTeal ? 'rgba(13, 148, 136, 0.45)' : 'rgba(225, 29, 72, 0.4)';
        ctx.fillStyle = col;
        ctx.fillRect(0, y, 1024, 4);
      }

      // Atmospheric vortex storms
      const storms = [
        { cx: 320, cy: 210, r: 90, col: 'rgba(20, 184, 166, 0.35)' },
        { cx: 720, cy: 300, r: 110, col: 'rgba(255, 107, 90, 0.32)' },
        { cx: 512, cy: 140, r: 70, col: 'rgba(20, 184, 166, 0.28)' },
        { cx: 180, cy: 370, r: 80, col: 'rgba(255, 107, 90, 0.25)' },
      ];

      storms.forEach((s) => {
        const radGrad = ctx.createRadialGradient(s.cx, s.cy, 0, s.cx, s.cy, s.r);
        radGrad.addColorStop(0, s.col);
        radGrad.addColorStop(0.7, 'rgba(12, 34, 44, 0.2)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(s.cx, s.cy, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle fine stardust turbulence
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      for (let i = 0; i < 3500; i++) {
        const px = Math.random() * 1024;
        const py = Math.random() * 512;
        ctx.fillRect(px, py, 1.5, 1.5);
      }
    }

    const planetTexture = new THREE.CanvasTexture(texCanvas);
    planetTexture.wrapS = THREE.RepeatWrapping;
    planetTexture.wrapT = THREE.ClampToEdgeWrapping;

    // 3. Central Planetary Sphere (Scaled down to 1.5 for sleek, elegant proportion)
    const planetGeo = new THREE.SphereGeometry(1.5, 64, 64);
    const planetMat = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.65,
      metalness: 0.15,
      emissive: new THREE.Color(0x061e24),
      emissiveIntensity: 0.5,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    scene.add(planetMesh);

    // 4. Atmospheric Teal Fresnel Glow Shell
    const atmoGeo = new THREE.SphereGeometry(1.56, 48, 48);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.08, 0.72, 0.65, intensity * 0.7);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmoMesh);

    // 5. Dual Tilted Elliptical Orbit Rings (Coral & Teal)
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Ring A (Refined Coral Orbit)
    const curveA = new THREE.EllipseCurve(0, 0, 2.35, 1.95, 0, 2 * Math.PI, false, 0);
    const pointsA = curveA.getPoints(120);
    const ringGeoA = new THREE.BufferGeometry().setFromPoints(pointsA);
    const ringMatA = new THREE.LineBasicMaterial({
      color: 0xff6b5a,
      transparent: true,
      opacity: 0.65,
      linewidth: 1.5,
    });
    const orbitLineA = new THREE.Line(ringGeoA, ringMatA);
    orbitLineA.rotation.x = Math.PI * 0.38;
    orbitLineA.rotation.y = Math.PI * 0.15;
    ringGroup.add(orbitLineA);

    // Ring B (Subtle Dashed Teal Orbit)
    const curveB = new THREE.EllipseCurve(0, 0, 2.5, 2.1, 0, 2 * Math.PI, false, 0);
    const pointsB = curveB.getPoints(120);
    const ringGeoB = new THREE.BufferGeometry().setFromPoints(pointsB);
    const ringMatB = new THREE.LineDashedMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.45,
      dashSize: 0.18,
      gapSize: 0.12,
    });
    const orbitLineB = new THREE.Line(ringGeoB, ringMatB);
    orbitLineB.computeLineDistances();
    orbitLineB.rotation.x = Math.PI * 0.48;
    orbitLineB.rotation.y = -Math.PI * 0.28;
    ringGroup.add(orbitLineB);

    // Orbiting Satellite Beacon on Ring A (Teal glowing satellite)
    const beaconGeo = new THREE.BufferGeometry();
    beaconGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
    const beaconMat = new THREE.PointsMaterial({
      color: 0x14b8a6,
      size: 0.18,
      transparent: true,
      opacity: 0.95,
    });
    const satelliteBeacon = new THREE.Points(beaconGeo, beaconMat);
    orbitLineA.add(satelliteBeacon);

    // 6. Tactical Outer Reticle Ring (Ultra subtle dashed circle)
    const reticleGroup = new THREE.Group();
    scene.add(reticleGroup);

    const reticleCurve = new THREE.EllipseCurve(0, 0, 2.0, 2.0, 0, 2 * Math.PI, false, 0);
    const reticlePoints = reticleCurve.getPoints(64);
    const reticleGeo = new THREE.BufferGeometry().setFromPoints(reticlePoints);
    const reticleMat = new THREE.LineDashedMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.25,
      dashSize: 0.15,
      gapSize: 0.25,
    });
    const reticleLine = new THREE.Line(reticleGeo, reticleMat);
    reticleLine.computeLineDistances();
    reticleGroup.add(reticleLine);

    // Tactical Target Marker on Planet
    const markerGeo = new THREE.RingGeometry(0.06, 0.08, 4);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xff6b5a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const targetMarker = new THREE.Mesh(markerGeo, markerMat);
    targetMarker.position.set(-0.25, 0.5, 1.4);
    targetMarker.rotation.z = Math.PI / 4;
    scene.add(targetMarker);

    // 7. Dynamic Lighting
    const keyLight = new THREE.DirectionalLight(0xe8f8f5, 2.2);
    keyLight.position.set(4, 3, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff6b5a, 1.4);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x224858, 1.8);
    scene.add(ambientLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.35;
    };

    mount.addEventListener('mousemove', onMouseMove);

    // 8. Animation Loop
    let animId = 0;
    let t = 0;

    const animate = () => {
      t += 0.012;

      // Slow majestic planetary rotation
      planetMesh.rotation.y += 0.002;

      // Smooth mouse lerping
      planetMesh.rotation.x += (targetRotX - planetMesh.rotation.x) * 0.05;
      planetMesh.rotation.z = Math.sin(t * 0.5) * 0.03;

      // Orbit beacon movement along ellipse
      const orbitT = (t * 0.3) % 1;
      const pt = curveA.getPoint(orbitT);
      satelliteBeacon.position.set(pt.x, pt.y, 0);

      // Subtle reticle breathing
      reticleGroup.rotation.z = t * 0.02;
      targetMarker.scale.setScalar(1 + Math.sin(t * 3.5) * 0.08);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Resize handler
    const onResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      planetGeo.dispose();
      planetMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      planetTexture.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="celestial-viewport" ref={mountRef} />
  );
}
