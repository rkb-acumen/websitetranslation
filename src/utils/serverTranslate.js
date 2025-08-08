// import axios from "axios";

// const API_KEY = "AIzaSyAr1CJ3ztX4RHr5O9z5IHeNQ6cGNRAR4LY";

// const cache = new Map();
// const getFromCache = (key) => cache.get(key);
// const setToCache = (key, value) => cache.set(key, value);

// export const translateText = async (texts, target = "en") => {
//     if (target === "en") return texts;

//     const inputArray = Array.isArray(texts) ? texts : [texts];
//     const results = new Array(inputArray.length);
//     const textsToTranslate = [];
//     const indexMap = [];

//     // Handle cache
//     inputArray.forEach((text, i) => {
//         if (!text || text.trim() === "") {
//             results[i] = "";
//             return;
//         }

//         const key = `${target}:${text}`;
//         const cached = getFromCache(key);
//         if (cached) {
//             results[i] = cached;
//         } else {
//             indexMap.push(i);
//             textsToTranslate.push(text);
//         }
//     });

//     // Batch texts and send translation requests
//     const BATCH_SIZE = 100;
//     for (let i = 0; i < textsToTranslate.length; i += BATCH_SIZE) {
//         const batchTexts = textsToTranslate.slice(i, i + BATCH_SIZE);
//         const batchIndices = indexMap.slice(i, i + BATCH_SIZE);

//         try {
//             const response = await axios.post(
//                 `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//                 {
//                     q: batchTexts,
//                     target,
//                     format: "text",
//                 }
//             );

//             const translations = response.data.data.translations.map(t => t.translatedText);

//             translations.forEach((translated, j) => {
//                 const originalIdx = batchIndices[j];
//                 const originalText = inputArray[originalIdx];
//                 const key = `${target}:${originalText}`;
//                 setToCache(key, translated);
//                 results[originalIdx] = translated;
//             });
//         } catch (err) {
//             console.error("[translateText] API failed in batch:", err.response?.data || err.message);
//             batchIndices.forEach((idx) => {
//                 results[idx] = inputArray[idx]; // fallback to original
//             });
//         }
//     }

//     return Array.isArray(texts) ? results : results[0];
// };
import axios from "axios";

const API_KEY = "AIzaSyAr1CJ3ztX4RHr5O9z5IHeNQ6cGNRAR4LY";

// Universal in-memory cache
const memoryCache = new Map();

// Helper to detect if running in browser
const isBrowser = typeof window !== "undefined";

// Get from cache (memory first, then localStorage if in browser)
const getFromCache = (key) => {
    if (memoryCache.has(key)) return memoryCache.get(key);

    if (isBrowser) {
        const stored = localStorage.getItem(key);
        if (stored) {
            const parsed = JSON.parse(stored);
            memoryCache.set(key, parsed);
            return parsed;
        }
    }

    return null;
};

// Set to both caches (memory + localStorage if in browser)
const setToCache = (key, value) => {
    memoryCache.set(key, value);
    if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Works in both client and server
export const translateText = async (texts, target = "en") => {
    if (target === "en") return texts;

    const inputArray = Array.isArray(texts) ? texts : [texts];
    const results = new Array(inputArray.length);
    const textsToTranslate = [];
    const indexMap = [];

    inputArray.forEach((text, i) => {
        if (!text || text.trim() === "") {
            results[i] = "";
            return;
        }

        const key = `${target}:${text}`;
        const cached = getFromCache(key);
        if (cached) {
            results[i] = cached;
        } else {
            indexMap.push(i);
            textsToTranslate.push(text);
        }
    });

    const BATCH_SIZE = 100;
    for (let i = 0; i < textsToTranslate.length; i += BATCH_SIZE) {
        const batchTexts = textsToTranslate.slice(i, i + BATCH_SIZE);
        const batchIndices = indexMap.slice(i, i + BATCH_SIZE);

        try {
            const response = await axios.post(
                `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
                {
                    q: batchTexts,
                    target,
                    format: "text",
                }
            );

            const translations = response.data.data.translations.map(t => t.translatedText);

            translations.forEach((translated, j) => {
                const originalIdx = batchIndices[j];
                const originalText = inputArray[originalIdx];
                const key = `${target}:${originalText}`;
                setToCache(key, translated);
                results[originalIdx] = translated;
            });
        } catch (err) {
            console.error("[translateText] API failed:", err.response?.data || err.message);
            batchIndices.forEach((idx) => {
                results[idx] = inputArray[idx]; // fallback to original
            });
        }
    }

    return Array.isArray(texts) ? results : results[0];
};
