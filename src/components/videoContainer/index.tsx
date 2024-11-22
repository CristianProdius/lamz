"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const VideoContainer = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleVideoEnd = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    e.currentTarget.pause();
    setVideoEnded(true);
  };

  const handleImageClick = () => {
    setVideoEnded(false);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
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
        <div className="aspect-video rounded-lg overflow-hidden bg-black/40 relative">
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
            <>
              <motion.video
                ref={videoRef}
                className="w-full max-w-5xl"
                onEnded={handleVideoEnd}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                autoPlay
                playsInline
                muted={isMuted}
                onClick={togglePlay}
              >
                <source
                  src="https://drive.google.com/uc?export=download&id=1J1KgiZ14JJV19eCtBrsls_hd3fWMfhvg"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </motion.video>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={toggleMute}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2"
                >
                  {isMuted ? (
                    <MuteIcon className="w-6 h-6 text-white" />
                  ) : (
                    <UnmuteIcon className="w-6 h-6 text-white" />
                  )}
                </button>
                <button
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-6 h-6 text-white" />
                  ) : (
                    <PlayIcon className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const MuteIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

const UnmuteIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

export default VideoContainer;
