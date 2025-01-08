"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const VideoContainer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <motion.div
        className="relative rounded-xl p-2 bg-black/20"
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
        <div className="aspect-video rounded-lg overflow-hidden bg-black/40 relative">
          {!showVideo ? (
            <div 
              className="w-full h-full cursor-pointer" 
              onClick={handleClick}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/preview.mp4" type="video/mp4" />
              </video>
            </div>
          ) : (
            <video
              className="w-full h-full no-skip"
              autoPlay
              controls
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
              style={{ pointerEvents: 'auto' }}
            >
              <source src="/main.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VideoContainer;