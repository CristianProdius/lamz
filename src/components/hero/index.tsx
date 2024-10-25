import { ChevronRight } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)] py-[72px]">
      <div className="container">
        {/* Header Alert */}
        <div className="flex items-center justify-center mb-8">
          <a
            href=""
            className="inline-flex gap-1 sm:gap-3 border py-1 px-2 rounded-lg border-white/30 whitespace-nowrap"
          >
            <div className="bg-green-500 px-2 sm:px-3 rounded-lg my-1 flex justify-center items-center">
              <span className="text-[10px] sm:text-xs font-bold text-black">
                ATTENTION
              </span>
            </div>
            <span className="py-1 text-[10px] sm:text-sm md:text-base">
              COACHES, AGENCIES & SERVICE-BASED BUSINESSES
            </span>
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Install Our <span className="italic">BLAST</span> System To
            Streamline Your Operations And Automate Manual Tasks
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Completely done-for-you to start scaling within 7 days
          </p>

          {/* Video Container */}
          <div className="max-w-3xl mx-auto  mb-12">
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
            <p className="text-md md:text-2xl">
              <span className="text-yellow-500 font-bold">Step 1 of 2:</span>{" "}
              Watch This Video
            </p>
            <p className="text-md md:text-2xl">
              <span className="text-green-500 font-bold">Step 2 of 2:</span>{" "}
              Schedule A Call
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 hover:bg-green-700 text-gray-100 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center space-x-2">
            <span>Schedule A Call</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
