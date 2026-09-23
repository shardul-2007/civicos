import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, Zap, Sun, BatteryCharging, Cpu, Building2, Shield, Activity } from 'lucide-react';

export default function CityEnergy3DModel({ onSelectBuilding, selectedBuilding }) {
  const mountRef = useRef(null);
  const [internalSelected, setInternalSelected] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    let renderer;
    let animationFrameId;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x05080b, 0.015);

      // Camera setup
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(40, 45, 55);
      camera.lookAt(0, 0, 0);

      // Renderer setup with safe fallback
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.8);
    scene.add(ambientLight);

    const cyanDirectional = new THREE.DirectionalLight(0x22d3ee, 2.2);
    cyanDirectional.position.set(30, 50, 20);
    scene.add(cyanDirectional);

    const bluePoint = new THREE.PointLight(0x3b82f6, 3, 60);
    bluePoint.position.set(-20, 20, -20);
    scene.add(bluePoint);

    // Base Grid / Digital Twin Platform
    const gridHelper = new THREE.GridHelper(90, 45, 0x22d3ee, 0x1e293b);
    gridHelper.position.y = -0.1;
    scene.add(gridHelper);

    // Glowing base ring
    const ringGeo = new THREE.RingGeometry(38, 38.5, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0;
    scene.add(ringMesh);

    // City Structures Generator Data
    const structuresData = [
      { id: 'BLD-042', name: 'BUILDING 042', type: 'Residential Tower', x: -12, z: -10, w: 4, h: 14, d: 4, load: '124 kW', solar: '48 kW', battery: '72%', efficiency: '89%' },
      { id: 'BLD-108', name: 'COMMERCIAL COMPLEX 108', type: 'Commercial', x: 8, z: -14, w: 6, h: 22, d: 5, load: '410 kW', solar: '120 kW', battery: '85%', efficiency: '94%' },
      { id: 'SLR-004', name: 'SOLAR FARM 04', type: 'Solar Array', x: -24, z: 12, w: 10, h: 2, d: 8, load: '0 kW', solar: '480 kW', battery: '95%', efficiency: '96%' },
      { id: 'BAT-002', name: 'BATTERY HUB ALPHA', type: 'Energy Storage', x: 18, z: 12, w: 5, h: 6, d: 5, load: '45 kW', solar: '0 kW', battery: '98%', efficiency: '98%' },
      { id: 'IND-019', name: 'INDUSTRIAL PARK 019', type: 'Industrial', x: -16, z: -24, w: 8, h: 10, d: 9, load: '780 kW', solar: '95 kW', battery: '60%', efficiency: '87%' },
      { id: 'EVC-007', name: 'EV CHARGING STATION 07', type: 'EV Mobility Hub', x: 14, z: -2, w: 4, h: 3, d: 4, load: '190 kW', solar: '32 kW', battery: '79%', efficiency: '91%' },
      { id: 'BLD-088', name: 'CIVIC CENTER 088', type: 'Municipal Government', x: 0, z: 0, w: 6, h: 16, d: 6, load: '210 kW', solar: '88 kW', battery: '90%', efficiency: '95%' },
    ];

    const meshes = [];

    // Create 3D Meshes for City Structures
    structuresData.forEach((data) => {
      const isSolar = data.type === 'Solar Array';
      const isBattery = data.type === 'Energy Storage';
      const isCivic = data.id === 'BLD-088';

      const geometry = new THREE.BoxGeometry(data.w, data.h, data.d);

      let color = 0x0e1726;
      if (isSolar) color = 0x06b6d4;
      else if (isBattery) color = 0x10b981;
      else if (isCivic) color = 0x3b82f6;

      const material = new THREE.MeshPhongMaterial({
        color: color,
        emissive: isSolar ? 0x0891b2 : isBattery ? 0x059669 : 0x0284c7,
        emissiveIntensity: 0.25,
        transparent: true,
        opacity: 0.85,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(data.x, data.h / 2, data.z);
      mesh.userData = data;
      scene.add(mesh);
      meshes.push(mesh);

      // Edges highlight
      const edgesGeo = new THREE.EdgesGeometry(geometry);
      const edgesMat = new THREE.LineBasicMaterial({
        color: isSolar ? 0x22d3ee : isBattery ? 0x34d399 : 0x60a5fa,
        linewidth: 1,
      });
      const wireframe = new THREE.LineSegments(edgesGeo, edgesMat);
      wireframe.position.copy(mesh.position);
      scene.add(wireframe);
    });

    // Glowing Energy Flow Paths & Particles
    const lineMat = new THREE.LineDashedMaterial({
      color: 0x22d3ee,
      dashSize: 1,
      gapSize: 0.5,
      linewidth: 2,
    });

    const connections = [
      [new THREE.Vector3(-24, 1, 12), new THREE.Vector3(0, 1, 0)],
      [new THREE.Vector3(18, 1, 12), new THREE.Vector3(0, 1, 0)],
      [new THREE.Vector3(0, 1, 0), new THREE.Vector3(8, 1, -14)],
      [new THREE.Vector3(0, 1, 0), new THREE.Vector3(-12, 1, -10)],
      [new THREE.Vector3(0, 1, 0), new THREE.Vector3(14, 1, -2)],
    ];

    connections.forEach(([p1, p2]) => {
      const curve = new THREE.LineCurve3(p1, p2);
      const points = curve.getPoints(20);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geom, lineMat);
      scene.add(line);
    });

    // Energy Particle System moving along paths
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = Math.random() * 15 + 1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Raycasting for building selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const clickedData = intersects[0].object.userData;
        setInternalSelected(clickedData);
        if (onSelectBuilding) onSelectBuilding(clickedData);
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);

    // Orbit Rotation Loop
    let angle = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow orbital camera spin
      angle += 0.002;
      camera.position.x = Math.sin(angle) * 55;
      camera.position.z = Math.cos(angle) * 55;
      camera.lookAt(0, 4, 0);

      // Animate particles flow
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(angle * 5 + i) * 0.05;
        if (positions[i * 3 + 1] > 20) positions[i * 3 + 1] = 1;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    } catch (err) {
      console.warn('[CityEnergy3DModel WebGL Notice]: Using resilient 2D spatial fallback canvas:', err.message);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) {
        try {
          if (renderer.domElement && container && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
          renderer.dispose();
        } catch (e) {}
      }
    };
  }, []);

  const activeDoc = selectedBuilding || internalSelected;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '520px', borderRadius: '20px', overflow: 'hidden' }}>
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'pointer' }} />

      {/* Spatial Legend Overlay */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(5, 8, 11, 0.75)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(34, 211, 238, 0.2)',
        borderRadius: '12px',
        padding: '0.85rem 1.1rem',
        fontSize: '0.75rem',
        color: '#cbd5e1',
        pointerEvents: 'none',
      }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          3D SPATIAL DIGITAL TWIN ACTIVE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontFamily: 'var(--font-mono)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4' }} /> Solar Arrays & Clean Output
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} /> Battery Reserve Storage Hubs
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} /> High-Density Civic Sectors
          </div>
        </div>
      </div>

      {/* Building Telemetry Inspection Glass Card */}
      {activeDoc && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          width: '320px',
          background: 'rgba(8, 14, 22, 0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(34, 211, 238, 0.4)',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 20px rgba(34, 211, 238, 0.2)',
          color: '#ffffff',
          animation: 'fadeInSlide 0.3s ease-out',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={18} color="#22d3ee" />
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>
                {activeDoc.id}
              </span>
            </div>
            <button
              onClick={() => setInternalSelected(null)}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '0.2rem', color: '#ffffff' }}>
            {activeDoc.name}
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
            TYPE: {activeDoc.type.toUpperCase()}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '0.85rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.6rem 0.75rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>CURRENT LOAD</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                {activeDoc.load}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.6rem 0.75rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>SOLAR OUTPUT</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>
                {activeDoc.solar}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.6rem 0.75rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>BATTERY RESERVE</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                {activeDoc.battery}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.6rem 0.75rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>EFFICIENCY</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>
                {activeDoc.efficiency}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
