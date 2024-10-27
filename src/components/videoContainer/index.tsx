"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const VideoContainer = () => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (containerRef.current === null) return;
      const containerRect = containerRef.current?.getBoundingClientRect();
      offsetX.set(e.x - containerRect.x);
      offsetY.set(e.y - containerRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="relative rounded-xl p-2 bg-black/20" ref={containerRef}>
        <motion.div
          className="absolute inset-0 border-2 rounded-xl z-20"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          animate={{
            borderColor: [
              "rgba(168, 85, 247, 0.4)",
              "rgba(0, 191, 255, 0.4)",
              "rgba(168, 85, 247, 0.4)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 border border-white/30 rounded-xl z-10" />
        <div className="aspect-video rounded-lg overflow-hidden">
          <video
            src="/Promo.mp4" // Adjust this path as needed
            controls
            ref={videoRef}
            onError={() => console.error("Video failed to load")}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
