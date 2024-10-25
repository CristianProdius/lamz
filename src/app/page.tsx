import AttentionBanner from "@/components/baner";
import HeroSection from "@/components/hero";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header Alert */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-center">
        <div className="inline-flex items-center bg-black/50 rounded-xl px-2 sm:px-4 py-2 border-white/30 border-[1px] whitespace-nowrap">
          <span className="bg-green-500 text-black text-[8px] xs:text-[10px] sm:text-xs font-bold px-1 sm:px-2 py-1 rounded-md mr-1 sm:mr-2">
            ATTENTION
          </span>
          <span className="text-[8px] xs:text-[10px] sm:text-sm">
            COACHES, AGENCIES & SERVICE-BASED BUSINESSES
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Install Our <span className="italic">BLAST</span> System To Streamline
          Your Operations And Automate Manual Tasks
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          Completely done-for-you to start scaling within 7 days
        </p>

        {/* Video Container */}
        <div className="max-w-xxl mx-auto  mb-12">
          <div className="rounded-lg overflow-hidden aspect-video px-2 pt-3 border-t border-l border-r border-white/30">
            <iframe
              src="./Promo.mp4"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          <p className="text-xl">
            <span className="text-yellow-500">Step 1 of 2:</span> Watch This
            Video
          </p>
          <p className="text-xl">
            <span className="text-green-500">Step 2 of 2:</span> Schedule A
            Systems Audit Call
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center space-x-2">
          <span>Schedule A Call</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
