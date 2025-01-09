"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface VideoContainerProps {
  previewSrc: string;
  mainVideoSrc: string;
  isYoutube?: boolean;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  previewSrc,
  mainVideoSrc,
  isYoutube = false,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const getYoutubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&controls=0&rel=0&modestbranding=1&showinfo=0&cc_load_policy=0`
      : url;
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
              className="w-full h-full cursor-pointer relative"
              onClick={() => setShowVideo(true)}
            >
              {isYoutube ? (
                <img
                  src={
                    previewSrc ||
                    `https://img.youtube.com/vi/${
                      mainVideoSrc.split("v=")[1]
                    }/maxresdefault.jpg`
                  }
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={previewSrc} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {isYoutube ? (
                <iframe
                  className="w-full h-full"
                  src={getYoutubeEmbedUrl(mainVideoSrc)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full no-skip"
                  autoPlay
                  controls
                  playsInline
                  controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                  style={{ pointerEvents: "auto" }}
                >
                  <source src={mainVideoSrc} type="video/mp4" />
                </video>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VideoContainer;
