
import { useEffect, useRef } from 'react';

const AnimatedGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Animation parameters
    const circleCount = 3;
    const circles = Array(circleCount).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 150 + Math.random() * 250,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      color: Math.random() > 0.5 ? 'rgba(49, 130, 246, 0.15)' : 'rgba(49, 130, 246, 0.1)'
    }));
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      circles.forEach(circle => {
        // Move the circle
        circle.x += circle.dx;
        circle.y += circle.dy;
        
        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
          circle.dx = -circle.dx;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
          circle.dy = -circle.dy;
        }
        
        // Draw the circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
};

export default AnimatedGradient;
