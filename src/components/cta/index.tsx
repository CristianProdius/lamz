import React from "react";

export const CTA = () => {
  return (
    <div className="bg-black text-white py-[72px] text-center sm:py-24">
      <div className="container mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instanc access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eveniet sit
        </p>
        <form
          action=""
          className="mt-10 flex flex-col gap-2.5 px-2 max-w-sm mx-auto sm:flex-row "
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
