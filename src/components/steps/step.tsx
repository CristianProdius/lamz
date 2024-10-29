"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface StepProps {
  title: string;
  subtitle: string;
  description: string;
  step: number;
}

const Step = ({ subtitle, description, step }: StepProps) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (border.current === null) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="relative rounded-3xl bg-purple-900/50 p-8 backdrop-blur-sm">
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-white/50"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
        }}
        ref={border}
      ></motion.div>

      <div className="flex flex-col items-center text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Step 0{step}</h3>
        <h4 className="text-xl font-semibold text-white/90">{subtitle}</h4>
        <div className="mt-2">
          <p className="text-lg font-medium text-white/80 mb-2">Outcome:</p>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
