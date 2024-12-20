import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene, Camera, and Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current?.appendChild(renderer.domElement);

    // Geometry and Material for the globe
    const geometry = new THREE.SphereGeometry(15, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3182ce, // Soft blue
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Camera position
    camera.position.z = 10;
    camera.position.y = -10;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Subtle rotation for the globe
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.002;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Three.js Background */}
      <div
        ref={mountRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      ></div>
  
      {/* Overlayed Title */}
      <div className="absolute top-1/4 left-10 z-20 text-left">
        <h1 className="text-5xl font-bold text-white leading-snug">
          Welcome to Your AI Journal
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover a smarter way to reflect, analyze, and grow.
        </p>
      </div>
    </div>
  );  
};

export default ThreeBackground;
