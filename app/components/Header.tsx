"use client";

import { useState } from "react";

export default function Header() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  return (
    <header className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white fixed top-0 z-50 max-w-[490px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">프로톡</h1>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium hover:underline">
            서비스 소개
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            이용 안내
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            자주 묻는 질문
          </a>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors text-sm"
          >
            {language === "ko" ? "EN" : "KO"}
          </button>
        </div>
      </div>
    </header>
  );
}
