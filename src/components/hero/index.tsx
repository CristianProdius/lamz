import { ChevronRight } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)] pt-4 md:pt-8 pb-[72px]  relative overflow-clip ">
      {/* Background Image */}
      <div className="absolute h-[875px] w-[1250px] sm:w-[1536px] sm:h-[768px] md:w-[3900px] md:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)]"></div>
      <div className="container relative mx-auto ">
        {/* Header Alert */}
        <div className="flex items-center justify-center mb-8 px-4 w-full">
          <a
            href=""
            className="inline-flex items-center justify-center gap-2 border py-1.5 px-3 rounded-lg border-white/30 w-auto"
          >
            <div className="bg-green-500 px-2 py-1 rounded-lg flex items-center ">
              <span className="text-[6px] font-bold text-black sm:text-xs">
                ATTENTION
              </span>
            </div>
            <span className="text-[7px] sm:text-xs md:text-sm lg:text-base">
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
            <div className="rounded-lg overflow-hidden aspect-video p-2 border border-white/30">
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
          <p className="text-xl md:text-2xl mb-2 text-gray-300">
            Your Next Steps Are:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
            <div className="flex items-center gap-2 sm:gap-3 bg-[#3e1a84]/10 rounded-lg px-2 sm:px-4 py-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="bg-[#fee370] w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-[#3e1a84]">
                    1
                  </span>
                </div>
                <span className="text-sm sm:text-md md:text-lg font-medium whitespace-nowrap">
                  Watch This Video
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-[#3e1a84]/10 rounded-lg px-2 sm:px-4 py-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="bg-[#fee370] w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-[#3e1a84]">
                    2
                  </span>
                </div>
                <span className="text-sm sm:text-md md:text-lg font-medium whitespace-nowrap">
                  Schedule A Call
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105">
            <span>Book A Call</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
