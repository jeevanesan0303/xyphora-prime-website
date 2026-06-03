import { useEffect, useRef } from "react";

const PHI = (1 + Math.sqrt(5)) / 2;

const VERTICES: [number, number, number][] = [
  [0, 1, PHI], [0, -1, PHI], [0, 1, -PHI], [0, -1, -PHI],
  [1, PHI, 0], [-1, PHI, 0], [1, -PHI, 0], [-1, -PHI, 0],
  [PHI, 0, 1], [-PHI, 0, 1], [PHI, 0, -1], [-PHI, 0, -1],
];

function getEdges(): [number, number][] {
  const edges: [number, number][] = [];
  const edgeLength = 2;
  for (let i = 0; i < VERTICES.length; i++) {
    for (let j = i + 1; j < VERTICES.length; j++) {
      const dx = VERTICES[i][0] - VERTICES[j][0];
      const dy = VERTICES[i][1] - VERTICES[j][1];
      const dz = VERTICES[i][2] - VERTICES[j][2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (Math.abs(dist - edgeLength) < 0.01) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

const EDGES = getEdges();

function rotateY(v: [number, number, number], angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [v[0] * cos + v[2] * sin, v[1], -v[0] * sin + v[2] * cos];
}

function rotateX(v: [number, number, number], angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [v[0], v[1] * cos - v[2] * sin, v[1] * sin + v[2] * cos];
}

function project(v: [number, number, number], size: number): [number, number, number] {
  const fov = 3.5;
  const z = v[2] + fov;
  const scale = (fov / z) * size * 0.32;
  return [v[0] * scale + size / 2, v[1] * scale + size / 2, v[2]];
}

export function Icosahedron() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 420;
    canvas.width = size;
    canvas.height = size;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, size, size);

      const angle = angleRef.current;
      const tiltX = 0.3;

      const rotated = VERTICES.map((v) => rotateX(rotateY(v, angle), tiltX));
      const projected = rotated.map((v) => project(v, size));

      // Outer glow bloom
      const grd = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size * 0.45);
      grd.addColorStop(0, "rgba(77,255,235,0.12)");
      grd.addColorStop(0.5, "rgba(77,255,235,0.06)");
      grd.addColorStop(1, "rgba(77,255,235,0)");
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Orbital ring
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate(0.3);
      ctx.scale(1, 0.38);
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.32, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(77,255,235,0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Inner core sphere
      const coreGrd = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, 28);
      coreGrd.addColorStop(0, "#B06FFF");
      coreGrd.addColorStop(0.6, "#7B4FCC");
      coreGrd.addColorStop(1, "rgba(77,255,235,0.3)");
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 28, 0, Math.PI * 2);
      ctx.fillStyle = coreGrd;
      ctx.shadowColor = "rgba(176,111,255,0.6)";
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw edges with depth-based opacity
      EDGES.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (rotated[i][2] + rotated[j][2]) / 2;
        const normalizedZ = (avgZ + PHI + 1) / (2 * PHI + 2);
        const alpha = 0.25 + normalizedZ * 0.6;

        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.strokeStyle = `rgba(77,255,235,${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = "rgba(77,255,235,0.4)";
        ctx.shadowBlur = 4;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw vertices
      projected.forEach((p, i) => {
        const z = rotated[i][2];
        const normalizedZ = (z + PHI + 1) / (2 * PHI + 2);
        const alpha = 0.3 + normalizedZ * 0.7;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,255,235,${alpha})`;
        ctx.shadowColor = "rgba(77,255,235,0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      angleRef.current += 0.005;
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "420px",
        height: "420px",
        opacity: 0.95,
      }}
    />
  );
}
