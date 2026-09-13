import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Point3D = { x: number; y: number; z: number };

const createSphere = (count: number): Point3D[] => {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < count; index += 1) {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;
    points.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
  }

  return points;
};

const rotatePoint = (point: Point3D, rotationX: number, rotationY: number) => {
  const cosY = Math.cos(rotationY);
  const sinY = Math.sin(rotationY);
  const x = point.x * cosY - point.z * sinY;
  const z = point.x * sinY + point.z * cosY;
  const cosX = Math.cos(rotationX);
  const sinX = Math.sin(rotationX);

  return {
    x,
    y: point.y * cosX - z * sinX,
    z: point.y * sinX + z * cosX,
  };
};

export const SystemCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { content } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const points = createSphere(74);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let rotationX = -0.18;
    let rotationY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      if (!reducedMotion) {
        rotationY += 0.0022 + pointerX * 0.0014;
        rotationX += (pointerY * 0.5 - rotationX) * 0.018;
      }

      const size = Math.min(width, height) * 0.32;
      const centerX = width * 0.5;
      const centerY = height * 0.49;
      const projected = points.map((point) => {
        const rotated = rotatePoint(point, rotationX, rotationY);
        const perspective = 1.15 / (2.5 - rotated.z);
        return {
          x: centerX + rotated.x * size * perspective * 1.7,
          y: centerY + rotated.y * size * perspective * 1.7,
          z: rotated.z,
          perspective,
        };
      });

      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, size * 1.25);
      glow.addColorStop(0, "rgba(109, 246, 255, 0.10)");
      glow.addColorStop(0.55, "rgba(109, 246, 255, 0.025)");
      glow.addColorStop(1, "rgba(109, 246, 255, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      for (let first = 0; first < projected.length; first += 1) {
        for (let second = first + 1; second < projected.length; second += 1) {
          const dx = projected[first].x - projected[second].x;
          const dy = projected[first].y - projected[second].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < size * 0.28) {
            const depth = (projected[first].z + projected[second].z + 2) / 4;
            context.strokeStyle = `rgba(109, 246, 255, ${(1 - distance / (size * 0.28)) * depth * 0.36})`;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(projected[first].x, projected[first].y);
            context.lineTo(projected[second].x, projected[second].y);
            context.stroke();
          }
        }
      }

      projected
        .sort((a, b) => a.z - b.z)
        .forEach((point, index) => {
          const alpha = 0.28 + ((point.z + 1) / 2) * 0.72;
          const radius = point.perspective * (index % 13 === 0 ? 7 : 3.8);
          context.beginPath();
          context.arc(point.x, point.y, radius, 0, Math.PI * 2);
          context.fillStyle = index % 13 === 0 ? `rgba(194, 255, 98, ${alpha})` : `rgba(109, 246, 255, ${alpha})`;
          context.fill();
        });

      if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="system-visual" aria-hidden="true">
      <canvas ref={canvasRef} className="system-canvas" />
      <div className="system-console glass-panel">
        <div className="console-topline">
          <span>{content.hero.sceneLabel}</span>
          <span className="console-dots"><i /><i /><i /></span>
        </div>
        <div className="console-status">
          <span className="status-pulse" />
          {content.hero.sceneStatus}
        </div>
        <div className="console-nodes">
          {content.hero.sceneNodes.map((node, index) => (
            <span key={node}><b>0{index + 1}</b>{node}</span>
          ))}
        </div>
      </div>
      <span className="orbit-label orbit-label-one">C# / .NET</span>
      <span className="orbit-label orbit-label-two">Vue.js</span>
      <span className="orbit-label orbit-label-three">Observability</span>
    </div>
  );
};
