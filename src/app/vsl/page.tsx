"use client";
import { ChevronRight } from "lucide-react";

import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const VslSection = () => {
  const router = useRouter();

  const handleBookClick = () => {
    router.push("/contact");
  };

  const handleJoinNowClick = () => {
    window.location.href = "https://buy.stripe.com/dR6cN0gzbcaR7fyeUV";
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 5,
    seconds: 53,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)] pt-4 md:pt-8 pb-4 relative overflow-clip px-4 min-h-screen">
        {/* Background Image */}
        <div className="absolute h-[875px] w-[1250px] sm:w-[1536px] sm:h-[768px] md:w-[3900px] md:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)]"></div>
        <div className="container relative mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-4 w-full gap-4 md:gap-8">
            {/* Logo */}

            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Image
                src="/logo.webp"
                alt="logo"
                className="h-8 md:h-12"
                width={48}
                height={48}
              />
            </div>
            {/* Timer Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
              {/* Offer Text */}
              <div className="text-center md:text-right">
                <p className="text-xs sm:text-sm font-medium">
                  480$ instead of 1280$ for the first 500 members
                </p>
                <p className="text-[10px] sm:text-xs text-gray-300">
                  Time Until Price Increase →
                </p>
              </div>
              {/* Timer */}
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-bold">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs">HOURS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs">MINUTES</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] md:text-xs">SECONDS</span>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-center text-3xl sm:text-5xl font-bold tracking-tighter mb-12">
              Full demo & training video:
            </h1>
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
                    src="https://player.vimeo.com/video/1052310589?h=a327fa597e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="main"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            <p className="text-xl md:text-2xl mb-12 text-gray-300 mt-4">
              (do not join the course before watching the free training video
              above)
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
            <button
              onClick={handleJoinNowClick}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-base sm:text-xl py-2 px-3 sm:py-3 sm:px-5 md:py-4 md:px-7 lg:py-5 lg:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Join Now</span>
              <ChevronRight />
            </button>
            <button
              onClick={handleBookClick}
              className="bg-gradient-to-r from-gray-100 to-gray-300 text-black text-base sm:text-xl py-2 px-3 sm:py-3 sm:px-5 md:py-4 md:px-7 lg:py-5 lg:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Book A Meeting</span>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VslSection;
