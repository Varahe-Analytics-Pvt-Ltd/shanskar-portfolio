import { useEffect, useRef } from 'react';

/**
 * GTA-Style Interactive Game Canvas
 * 
 * Features:
 * - Top-down road view with animated vehicles
 * - Traffic simulation with multiple lanes
 * - Interactive elements and portfolio overlay
 * - Smooth animations and physics-based movement
 */

interface Vehicle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  lane: number;
  color: string;
  type: 'car' | 'truck' | 'taxi' | 'police';
}

export default function GTAGameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vehiclesRef = useRef<Vehicle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

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

    // Initialize vehicles
    const initializeVehicles = () => {
      vehiclesRef.current = [
        { id: 1, x: 100, y: 150, width: 60, height: 40, speed: 3, lane: 0, color: '#FF0000', type: 'car' },
        { id: 2, x: 200, y: 250, width: 60, height: 40, speed: 2.5, lane: 1, color: '#FFFF00', type: 'taxi' },
        { id: 3, x: 50, y: 350, width: 80, height: 50, speed: 2, lane: 0, color: '#0000FF', type: 'truck' },
        { id: 4, x: 300, y: 450, width: 60, height: 40, speed: 3.5, lane: 2, color: '#000000', type: 'car' },
        { id: 5, x: 150, y: 550, width: 60, height: 40, speed: 2.8, lane: 1, color: '#FFFFFF', type: 'police' },
      ];
    };
    initializeVehicles();

    // Draw road
    const drawRoad = () => {
      // Road background
      ctx.fillStyle = '#333333';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Road surface
      ctx.fillStyle = '#555555';
      ctx.fillRect(0, 100, canvas.width, canvas.height - 200);

      // Road markings - center line
      ctx.strokeStyle = '#FFFF00';
      ctx.setLineDash([20, 10]);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      // Lane markings
      ctx.strokeStyle = '#FFFFFF';
      ctx.setLineDash([10, 10]);
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        const y = 150 + i * 120;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Sidewalks
      ctx.fillStyle = '#888888';
      ctx.fillRect(0, 0, canvas.width, 100);
      ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
    };

    // Draw vehicle
    const drawVehicle = (vehicle: Vehicle) => {
      ctx.fillStyle = vehicle.color;
      ctx.fillRect(vehicle.x, vehicle.y, vehicle.width, vehicle.height);

      // Vehicle outline
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(vehicle.x, vehicle.y, vehicle.width, vehicle.height);

      // Windows
      ctx.fillStyle = 'rgba(100, 150, 255, 0.6)';
      ctx.fillRect(vehicle.x + 5, vehicle.y + 5, vehicle.width - 10, vehicle.height / 2 - 5);
    };

    // Update vehicle position
    const updateVehicles = () => {
      vehiclesRef.current.forEach((vehicle) => {
        vehicle.x += vehicle.speed;

        // Wrap around screen
        if (vehicle.x > canvas.width) {
          vehicle.x = -vehicle.width;
        }

        // Slight vertical movement for lane variation
        const laneY = 150 + vehicle.lane * 120;
        vehicle.y += (laneY - vehicle.y) * 0.02;
      });
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#222222';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw elements
      drawRoad();

      // Update and draw vehicles
      updateVehicles();
      vehiclesRef.current.forEach((vehicle) => {
        drawVehicle(vehicle);
      });

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
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg">
            Shanskar Bansal
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-200 drop-shadow-lg mb-8">
            AI Engineer • Political Sector Technologist
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all pointer-events-auto">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all pointer-events-auto">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-8 left-8 text-white font-mono text-sm pointer-events-auto">
        <div className="bg-black/50 backdrop-blur p-4 rounded border border-green-500">
          <div>Vehicles on Road: {vehiclesRef.current.length}</div>
          <div>Canvas: {canvasRef.current?.width}x{canvasRef.current?.height}</div>
          <div>FPS: 60</div>
        </div>
      </div>
    </div>
  );
}
