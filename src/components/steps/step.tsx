// Step.tsx
"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

interface StepProps {
  title: string;
  subtitle: string;
  description: string;
  step: number;
}

const Step = ({ subtitle, description, step }: StepProps) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  const maskImage = useMotionTemplate`radial-gradient(160px 160px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (border.current === null) return;
      const rect = border.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    border.current?.addEventListener("mousemove", updateMousePosition);
    return () =>
      border.current?.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full flex flex-col relative rounded-3xl bg-gradient-to-br from-[#6d35c7] via-[#7d3ee3] to-[#6d35c7] p-8 backdrop-blur-md group"
      style={{
        boxShadow:
          "0 10px 30px rgba(67, 26, 158, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 rounded-3xl bg-white/[0.08] backdrop-blur-sm" />

      <div className="pointer-events-none">
        <div
          className="absolute inset-0 rounded-3xl transition duration-300 group-hover:opacity-100 opacity-0"
          style={{
            background:
              "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          ref={border}
        />
      </div>

      <div className="relative flex flex-col items-center text-center space-y-6">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span className="text-2xl font-bold text-white">{step}</span>
        </div>
        <h4 className="text-2xl font-semibold text-white">{subtitle}</h4>
        <div className="mt-2">
          <p className="text-base text-white/90 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Ambient light effect */}
      <div className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default Step;
