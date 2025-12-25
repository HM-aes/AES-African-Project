"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface AES3DRobotProps {
  className?: string;
}

export function AES3DRobot({ className = "" }: AES3DRobotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const robotRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xfbbf24, 1); // AES Gold
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x22c55e, 0.8); // AES Green
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Create AES Robot Group
    const robot = new THREE.Group();
    robotRef.current = robot;
    scene.add(robot);

    // Helper function to create box geometry with custom color
    const createBox = (
      width: number,
      height: number,
      depth: number,
      color: string
    ) => {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshPhongMaterial({ color });
      return new THREE.Mesh(geometry, material);
    };

    // Body (main torso)
    const body = createBox(0.6, 1.2, 0.4, 0x1a1a1a); // Pan-African Black
    body.position.z = 0;
    body.castShadow = true;
    robot.add(body);

    // Add gold accent stripes to body
    const accentStripe1 = createBox(0.65, 0.08, 0.45, 0xfbbf24); // AES Gold
    accentStripe1.position.set(0, 0.35, 0);
    robot.add(accentStripe1);

    const accentStripe2 = createBox(0.65, 0.08, 0.45, 0x22c55e); // AES Green
    accentStripe2.position.set(0, -0.35, 0);
    robot.add(accentStripe2);

    // Head
    const head = createBox(0.5, 0.5, 0.5, 0x1a1a1a);
    head.position.y = 1.1;
    head.castShadow = true;
    robot.add(head);

    // Eyes (left and right)
    const eyeGeometry = new THREE.SphereGeometry(0.12, 32, 32);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x22c55e }); // Green eyes

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.12, 1.15, 0.3);
    leftEye.scale.set(1, 1.3, 0.6);
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.12, 1.15, 0.3);
    rightEye.scale.set(1, 1.3, 0.6);
    robot.add(rightEye);

    // Antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 8);
    const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0xfbbf24 }); // Gold
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.set(0, 1.6, 0);
    antenna.rotation.z = 0.3;
    robot.add(antenna);

    // Left Arm
    const leftArm = createBox(0.25, 0.9, 0.25, 0x1a1a1a);
    leftArm.position.set(-0.5, 0.3, 0);
    leftArm.rotation.z = 0.3;
    robot.add(leftArm);

    // Right Arm
    const rightArm = createBox(0.25, 0.9, 0.25, 0x1a1a1a);
    rightArm.position.set(0.5, 0.3, 0);
    rightArm.rotation.z = -0.3;
    robot.add(rightArm);

    // Left Leg
    const leftLeg = createBox(0.25, 0.8, 0.25, 0x22c55e); // Green legs for contrast
    leftLeg.position.set(-0.25, -1.0, 0);
    robot.add(leftLeg);

    // Right Leg
    const rightLeg = createBox(0.25, 0.8, 0.25, 0x22c55e);
    rightLeg.position.set(0.25, -1.0, 0);
    robot.add(rightLeg);

    // Chest plate (gold AES symbol area)
    const chestPlate = createBox(0.5, 0.6, 0.1, 0xfbbf24);
    chestPlate.position.set(0, 0.2, 0.25);
    robot.add(chestPlate);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (robotRef.current) {
        // Smooth rotation
        robotRef.current.rotation.y += 0.004;

        // Gentle bobbing motion
        robotRef.current.position.y = Math.sin(Date.now() * 0.0005) * 0.2;

        // Arm wave
        const arms = robot.children.filter(
          (child) =>
            child.position.x !== 0 &&
            Math.abs(child.position.y - 0.3) < 0.1
        );
        arms.forEach((arm, index) => {
          arm.rotation.z =
            (index === 0 ? 0.3 : -0.3) +
            Math.sin(Date.now() * 0.003 + index) * 0.3;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose all geometries and materials
      robot.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });

      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl ${className}`}
      style={{ minHeight: "350px" }}
    />
  );
}
