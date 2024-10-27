import { Instagram, Linkedin, X, Youtube } from "lucide-react";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20  ">
      <div className="container mx-auto px-8 ">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            © 2024 Lamz Course Creatian, LLC. All right reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Instagram />
            </li>
            <li>
              <X />
            </li>
            <li>
              <Youtube />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
