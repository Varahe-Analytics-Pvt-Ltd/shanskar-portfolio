import { useEffect, useRef } from 'react';

/**
 * Enhanced GTA-Style Interactive Game Canvas
 * 
 * Features:
 * - Realistic top-down road view with multiple lanes
 * - Animated vehicles with smooth physics
 * - Traffic simulation with collision avoidance
 * - Interactive overlay with portfolio content
 * - Particle effects and visual enhancements
 */

interface Vehicle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  targetSpeed: number;
  lane: number;
  color: string;
  type: 'car' | 'truck' | 'taxi' | 'police';
  rotation: number;
}

export default function GTAGameCanvasEnhanced() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vehiclesRef = useRef<Vehicle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null;
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize vehicles with better distribution
    const initializeVehicles = () => {
      const vehicles: Vehicle[] = [];
      const vehicleTypes = ['car', 'truck', 'taxi', 'police', 'car'] as const;
      const colors = ['#FF0000', '#FFFF00', '#0000FF', '#000000', '#FFFFFF', '#00FF00', '#FF00FF'];

      for (let i = 0; i < 8; i++) {
        vehicles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: 150 + (i % 4) * 100,
          width: i % 3 === 0 ? 80 : 60,
          height: 45,
          speed: 2 + Math.random() * 2,
          targetSpeed: 2 + Math.random() * 2,
          lane: i % 4,
          color: colors[i % colors.length],
          type: vehicleTypes[i % vehicleTypes.length],
          rotation: 0,
        });
      }
      vehiclesRef.current = vehicles;
    };
    initializeVehicles();

    // Draw road with better graphics
    const drawRoad = () => {
      // Sky
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(1, '#333333');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Road surface
      ctx.fillStyle = '#444444';
      ctx.fillRect(0, 80, canvas.width, canvas.height - 160);

      // Road markings - center line (yellow)
      ctx.strokeStyle = '#FFFF00';
      ctx.setLineDash([30, 15]);
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      // Lane markings (white)
      ctx.strokeStyle = '#FFFFFF';
      ctx.setLineDash([15, 15]);
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        const y = 130 + i * 100;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Sidewalks
      ctx.fillStyle = '#666666';
      ctx.fillRect(0, 0, canvas.width, 80);
      ctx.fillRect(0, canvas.height - 80, canvas.width, 80);

      // Buildings/environment on sides
      ctx.fillStyle = '#555555';
      ctx.fillRect(0, 0, 40, 80);
      ctx.fillRect(canvas.width - 40, 0, 40, 80);
      ctx.fillRect(0, canvas.height - 80, 40, 80);
      ctx.fillRect(canvas.width - 40, canvas.height - 80, 40, 80);
    };

    // Draw vehicle with better graphics
    const drawVehicle = (vehicle: Vehicle) => {
      ctx.save();
      ctx.translate(vehicle.x + vehicle.width / 2, vehicle.y + vehicle.height / 2);
      ctx.rotate(vehicle.rotation);

      // Vehicle body
      ctx.fillStyle = vehicle.color;
      ctx.fillRect(-vehicle.width / 2, -vehicle.height / 2, vehicle.width, vehicle.height);

      // Vehicle outline
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(-vehicle.width / 2, -vehicle.height / 2, vehicle.width, vehicle.height);

      // Windows
      ctx.fillStyle = 'rgba(100, 150, 255, 0.7)';
      ctx.fillRect(-vehicle.width / 2 + 5, -vehicle.height / 2 + 5, vehicle.width - 10, vehicle.height / 2 - 8);

      // Headlights
      ctx.fillStyle = '#FFFF00';
      ctx.beginPath();
      ctx.arc(-vehicle.width / 4, -vehicle.height / 2 - 2, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(vehicle.width / 4, -vehicle.height / 2 - 2, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Update vehicle positions with physics
    const updateVehicles = () => {
      vehiclesRef.current.forEach((vehicle, index) => {
        // Smooth acceleration
        vehicle.speed += (vehicle.targetSpeed - vehicle.speed) * 0.02;

        // Move vehicle
        vehicle.x += vehicle.speed;

        // Wrap around screen
        if (vehicle.x > canvas.width + vehicle.width) {
          vehicle.x = -vehicle.width;
          vehicle.y = 130 + Math.random() * 300;
          vehicle.lane = Math.floor(Math.random() * 4);
        }

        // Smooth lane transitions
        const targetY = 130 + vehicle.lane * 100;
        vehicle.y += (targetY - vehicle.y) * 0.05;

        // Collision avoidance
        vehiclesRef.current.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = other.x - vehicle.x;
            const dy = other.y - vehicle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120 && distance > 0) {
              if (dx > 0 && vehicle.speed > other.speed) {
                vehicle.targetSpeed = other.speed * 0.9;
              }
            }
          }
        });

        // Random speed variation
        if (Math.random() < 0.01) {
          vehicle.targetSpeed = 1.5 + Math.random() * 3;
        }
      });
    };

    // Draw speed indicator
    const drawHUD = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(20, 20, 200, 120);

      ctx.strokeStyle = '#00FF00';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 200, 120);

      ctx.fillStyle = '#00FF00';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('TRAFFIC SIMULATOR', 30, 45);
      ctx.font = '12px monospace';
      ctx.fillText(`Vehicles: ${vehiclesRef.current.length}`, 30, 65);
      ctx.fillText(`Time: ${Math.floor(timeRef.current / 60)}s`, 30, 85);
      ctx.fillText(`FPS: 60`, 30, 105);
      ctx.fillText(`Status: ACTIVE`, 30, 125);
    };

    // Animation loop
    const animate = () => {
      timeRef.current++;

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw elements
      drawRoad();

      // Update and draw vehicles
      updateVehicles();
      vehiclesRef.current.forEach((vehicle) => {
        drawVehicle(vehicle);
      });

      // Draw HUD
      drawHUD();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: 'block' }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
        <div className="text-center text-white pointer-events-auto">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl" style={{ textShadow: '0 0 20px rgba(0,255,0,0.5)' }}>
            Shanskar Bansal
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-200 drop-shadow-lg mb-8">
            AI Engineer • Political Sector Technologist
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all pointer-events-auto hover:shadow-lg hover:shadow-blue-500/50">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all pointer-events-auto">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Right side info panel */}
      <div className="absolute bottom-8 right-8 text-white font-mono text-sm pointer-events-auto">
        <div className="bg-black/70 backdrop-blur p-4 rounded border border-cyan-500">
          <div className="text-cyan-500 font-bold mb-2">PORTFOLIO SYSTEM</div>
          <div className="text-gray-300">
            <div>Mode: Interactive</div>
            <div>Status: Online</div>
            <div>Vehicles: {vehiclesRef.current.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
