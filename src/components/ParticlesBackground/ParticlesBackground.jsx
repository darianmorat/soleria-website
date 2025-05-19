import { useEffect, useRef } from "react";
import styles from "./ParticlesBackground.module.css";

export const ParticlesBackground = () => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;

      let particles = [];
      let mouse = { x: undefined, y: undefined };

      // Create particles
      for (let i = 0; i < 120; i++) {
         particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1.0, // smaller particles
            vx: (Math.random() - 0.5) * 0.8, // smoother motion
            vy: (Math.random() - 0.5) * 0.8,
         });
      }

      // Handle events
      const handleResize = () => {
         canvas.width = canvas.parentElement.offsetWidth;
         canvas.height = canvas.parentElement.offsetHeight;
      };

      const handleMouseMove = (e) => {
         const rect = canvas.getBoundingClientRect();
         mouse.x = e.clientX - rect.left;
         mouse.y = e.clientY - rect.top;
      };

      window.addEventListener("resize", handleResize);
      canvas.addEventListener("mousemove", handleMouseMove);

      // Animation loop
      function animate() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);

         particles.forEach((p) => {
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.shadowColor = "black";
            ctx.shadowBlur = 5;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x > canvas.width || p.x < 0) p.vx *= -1;
            if (p.y > canvas.height || p.y < 0) p.vy *= -1;

            // Mouse interaction
            if (mouse.x) {
               const dx = mouse.x - p.x;
               const dy = mouse.y - p.y;
               const dist = Math.sqrt(dx * dx + dy * dy);

               if (dist < 100) {
                  p.x -= ((dx / dist) * (100 - dist)) / 50;
                  p.y -= ((dy / dist) * (100 - dist)) / 50;
               }
            }

            // Connect particles
            particles.forEach((p2) => {
               const dx = p.x - p2.x;
               const dy = p.y - p2.y;
               const dist = Math.sqrt(dx * dx + dy * dy);

               if (dist < 100) {
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(173, 216, 230, ${0.5 - dist / 150})`;
                  ctx.lineWidth = 0.5;
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
               }
            });
         });

         requestAnimationFrame(animate);
      }

      animate();

      return () => {
         window.removeEventListener("resize", handleResize);
         canvas.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);

   return <canvas ref={canvasRef} className={styles.canvas} />;
};
