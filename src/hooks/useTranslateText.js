import axios from "axios";

const API_KEY = "AIzaSyAr1CJ3ztX4RHr5O9z5IHeNQ6cGNRAR4LY";
const memoryCache = new Map();

const getFromCache = (key) => {
  if (memoryCache.has(key)) return memoryCache.get(key);

  const stored = localStorage.getItem(key);
  if (stored) {
    memoryCache.set(key, stored);
    console.log("from stored cache",key, stored);
    return stored;
  }

  return null;
};

const setToCache = (key, value) => {
  memoryCache.set(key, value);
  localStorage.setItem(key, value);
  console.log('set to local storgae',key, value);
};

const useTranslateText = () => {
  const translate = async (texts, target) => {
    if (target === "en") return texts;

    const inputArray = Array.isArray(texts) ? texts : [texts];
    const results = [];
    const textsToTranslate = [];
    const indexMap = [];

    inputArray.forEach((text, i) => {
      const key = `${target}:${text}`;
      console.log(key,'this is the text ');
      const cached = getFromCache(key);
      if (cached) {
        results[i] = cached;
      } else {
        indexMap.push(i);
        textsToTranslate.push(text);
      }
    });
 
    if (textsToTranslate.length > 0) {
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
          {
            q: textsToTranslate,
            target,
            format: "text",
          }
        );

        const translations = response.data.data.translations.map((t) => t.translatedText);

        translations.forEach((translated, idx) => {
          const originalIdx = indexMap[idx];
          const originalText = inputArray[originalIdx];
          const key = `${target}:${originalText}`;
          setToCache(key, translated);
          results[originalIdx] = translated;
        });
      } catch (err) {
        console.error("Translation failed", err);
        indexMap.forEach((i) => {
          results[i] = inputArray[i]; // fallback
        });
      }
    }

    return Array.isArray(texts) ? results : results[0];
  };

  return translate;
};

export default useTranslateText;