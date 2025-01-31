"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useState } from "react";
import "react-phone-number-input/style.css";

const VSL_PAGE_URL = "https://lamzcoursecreation.com//vsl"; // Replace with your VSL page URL
const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycby250Xjp4ZEUMuXAugsRugBm51HrfNvtxElQgsHJLumAynangO0qhAcoEsNuyXEyqbxyg/exec"; // You'll need to replace this

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError("Please enter your full name");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      setIsLoading(true);

      const formPayload = {
        timestamp: new Date().toISOString(),
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      };

      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      setFormData({ fullName: "", email: "", phoneNumber: "" });
      onClose();
      window.location.href = VSL_PAGE_URL;
    } catch (err) {
      setError("Form submission failed. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            className="fixed left-1/2 top-1/2 w-[90%] max-w-[400px] z-[101]"
          >
            <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 text-white/60 hover:text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>

              <div className="p-8">
                <p className="text-gray-400 text-sm font-medium text-center mb-2">
                  FREE TRAINING
                </p>

                <h2 className="text-2xl font-bold text-center text-white mb-6 leading-tight">
                  The No-BS online business model that turns your passion and
                  expertise into profit without ads or any followers
                </h2>
                <div className="aspect-video bg-orange-900/20 rounded-lg mb-8 overflow-hidden w-full">
                  <Image
                    src="/image.webp"
                    alt="Business Model"
                    layout="responsive"
                    width={700} // Adjust the width and height to match your image's aspect ratio
                    height={475} // Adjust the width and height to match your image's aspect ratio
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Full Name*"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email*"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full py-4 bg-[#0037FF] hover:bg-[#0037FF]/90 text-white rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "PROCESSING..." : "WATCH FREE TRAINING"}
                  </button>
                </div>

                <p className="text-gray-500 text-xs text-center mt-4">
                  This demo is closing soon. Save your spot now.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
