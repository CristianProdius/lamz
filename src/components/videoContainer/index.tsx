"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const VideoContainer = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleVideoEnd = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    e.currentTarget.pause();
    setVideoEnded(true);
  };

  const handleImageClick = () => {
    setVideoEnded(false);
  };

  return (
    <div className="max-w-5xl mx-auto mb-12">
      <motion.div
        className="relative rounded-xl p-2 bg-black/20"
        ref={containerRef}
        animate={{
          boxShadow: [
            "0 0 0 2px rgba(168, 85, 247, 0.4)",
            "0 0 0 2px rgba(0, 191, 255, 0.4)",
            "0 0 0 2px rgba(168, 85, 247, 0.4)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="aspect-video rounded-lg overflow-hidden bg-black/40">
          {videoEnded ? (
            <motion.img
              src="/main.jpg"
              alt="Video thumbnail"
              className="w-full max-w-4xl cursor-pointer"
              onClick={handleImageClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.video
              className="w-full max-w-5xl"
              controls
              poster="/main.jpg"
              onEnded={handleVideoEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <source src="/Promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VideoContainer;
