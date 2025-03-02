"use client"
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particlesArray = [];
    const colors = ["#FFD700", "#FFA500", "#FF6347", "#FF4500", "#F4A460"];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    function init() {
      particlesArray = [];
      for (let i = 0; i < 50; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center text-white min-h-[75vh] bg-[#151515] p-6 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-50"></canvas>
      <div className="relative z-10 max-w-4xl w-full px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
          Kumar Physics Classes
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          Empowering students to achieve excellence in Physics through innovative teaching methods and personalized attention.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <span className="flex items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-2xl">JEE</span>
          <span className="flex items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-2xl">NEET</span>
          <span className="flex flex-col items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-xl text-center">
            11th & 12th
          </span>
          <span className="flex flex-col items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-xl text-center">
            9th & 10th
            <span className="text-sm">Science & Math</span>
          </span>
        </div>
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Join Kumar Physics classes to unlock your potential and achieve excellence in competitive and board exams with our expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
