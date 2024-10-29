import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

interface ContactButtonProps {
  text: string;
}

const ContactButton = ({ text }: ContactButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-white text-black py-3 px-5 rounded-lg font-medium inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 mx-auto"
    >
      <span>{text}</span>
      <ChevronRight />
    </button>
  );
};

export default ContactButton;
