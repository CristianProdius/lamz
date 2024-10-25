const HeroSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Install Our <span className="italic">BLAST</span> System To Streamline
        Your Operations And Automate Manual Tasks
      </h1>

      <p className="text-gray-300 text-lg mb-8">
        Completely done-for-you to start scaling within 7 days
      </p>

      <div className="bg-black/80 rounded-xl p-4 max-w-3xl mx-auto">
        {/* Video Player Component */}
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="/Promo.mp4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <p className="text-[#00FF85] font-medium">
          Step 1 of 2: Watch This Video
        </p>
        <p className="text-white font-medium">
          Step 2 of 2: Schedule A Systems Audit Call
        </p>

        <button className="bg-[#00FF85] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#00FF85]/90 transition-colors">
          Schedule A Call →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
