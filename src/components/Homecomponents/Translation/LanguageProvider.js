// src/components/Homecomponents/Translation/LanguageProvider.jsx
"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LanguageContext } from "@/context/LanguageContext";
import Cookies from "js-cookie";

const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [language, setLanguageState] = useState(() => Cookies.get("language") || "en");

  const setLanguage = (lang) => {
    Cookies.set("language", lang, { expires: 365 });
    setLanguageState(lang);
    // router.refresh();
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
