"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  // DOM Element
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Create scene
  useEffect(() => {
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75, // FOV
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000, // Far clipping plane
    );
    camera.position.z = 5;
    scene.add(camera);

    // Create renderer and append to DOM
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
  }, []);

  return <div ref={mountRef} />;
}
