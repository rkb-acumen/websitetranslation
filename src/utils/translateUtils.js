// utils/translateUtils.js
export const extractTextForTranslation = (obj, path = [], texts = [], paths = []) => {
  if (typeof obj === "string" && obj.trim()) {
    texts.push(obj);
    paths.push([...path]);
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      extractTextForTranslation(item, [...path, index], texts, paths);
    });
  } else if (obj && typeof obj === "object") {
    Object.entries(obj).forEach(([key, value]) => {
      extractTextForTranslation(value, [...path, key], texts, paths);
    });
  }
  return { texts, paths };
};

export const injectTranslatedText = (obj, paths, translatedTexts) => {
  const clone = structuredClone(obj); // deep copy to avoid mutation
  paths.forEach((path, index) => {
    let current = clone;
    for (let i = 0; i < path.length - 1; i++) {
      current = current?.[path[i]];
      if (!current) return;
    }
    const lastKey = path[path.length - 1];
    current[lastKey] = translatedTexts[index];
  });
  return clone;
};
