"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed cursor-pointer flex z-50 items-center justify-center border-none w-12 h-12 text-2xl bottom-5 left-5 transition-all bg-white opacity-75 hover:opacity-100 duration-300`}
    >
      <ArrowLeft className="size-7 text-violet-500" />
    </button>
  );
};

export default BackButton;
