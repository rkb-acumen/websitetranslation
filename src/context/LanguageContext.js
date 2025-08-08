// src/context/LanguageContext.jsx
import { createContext } from "react";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});
