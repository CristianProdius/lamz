"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Player from "@vimeo/player";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const player = new Player(iframe);

      player.setVolume(1); // Set volume to 100%

      player.on("loaded", () => {
        player.play();
      });

      return () => {
        player.unload();
      };
    }
  }, []);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)] pt-4 md:pt-8 pb-[72px] relative overflow-clip px-4">
      {/* Background Image */}
      <div className="absolute h-[875px] w-[1250px] sm:w-[1536px] sm:h-[768px] md:w-[3900px] md:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)]"></div>
      <div className="container relative mx-auto">
        {/* Header Alert */}
        <div className="flex items-center justify-center mb-8 px-4 w-full">
          <a
            href=""
            className="inline-flex items-center justify-center gap-2 border py-1.5 px-3 rounded-lg border-white/30 w-auto"
          >
            <div className="bg-green-500 px-2 py-1 rounded-lg flex items-center">
              <span className="text-[6px] font-bold text-black sm:text-xs">
                ATTENTION
              </span>
            </div>
            <span className="text-[7px] sm:text-xs md:text-sm lg:text-base">
              Creators and Freelancers Only
            </span>
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter">
            Transform Your <span className="italic">Knowledge</span> Into A
            Thriving Online Course Business
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 mt-4">
            Create and launch your profitable online course in 30 days - no
            following, no ads, guaranteed results
          </p>

          {/* Video Container */}
          <div className="vsl-container relative w-full max-w-3xl mx-auto mb-12">
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
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40">
                <iframe
                  src="https://player.vimeo.com/video/1052329231?h=0540f3a723&badge=0&autopause=0&player_id=0&app_id=58479&muted=false"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="main"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onOpenModal}
            className="bg-white text-black sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105"
          >
            <span>Watch Free Training</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
