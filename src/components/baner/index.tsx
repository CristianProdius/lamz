const AttentionBanner = () => {
  return (
    <div className="bg-slate-400 max-w-md py-3 px-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <span className="bg-green-500 text-xs font-semibold px-2 py-0.5 rounded-md uppercase tracking-wide">
          Attention
        </span>
        <span className="text-white font-medium uppercase tracking-wider">
          Coaches, Agencies & Service-Based Businesses
        </span>
      </div>
    </div>
  );
};

export default AttentionBanner;
