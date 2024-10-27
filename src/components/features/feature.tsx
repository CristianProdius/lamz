"use client";
import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => {
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
    <div
      key={title}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <Check />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
