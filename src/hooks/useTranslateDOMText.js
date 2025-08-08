import { useEffect, useContext } from "react";
import useTranslateText from "./useTranslateText";
import { LanguageContext } from "../context/LanguageContext";

const useTranslateDOMText = ({ ref, deps = [] }) => {
  const translate = useTranslateText();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    console.log("atleast coming here ........................");
    const translateDOM = async () => {
      if (!ref.current) return;
      console.log("one is here ---------------------------------");
      const textNodes = [];
      const attrNodes = [];

      // Text nodes inside elements
      const walker = document.createTreeWalker(
        ref.current,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) =>
            node.textContent.trim().length > 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_REJECT,
        }
      );
      console.log("two is here -----------------------------------");
      while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
      }

      // Attribute text in placeholder, title, alt, aria-label, etc.
      const ATTRIBUTES_TO_TRANSLATE = ["placeholder", "title", "alt", "aria-label"];

      ATTRIBUTES_TO_TRANSLATE.forEach((attr) => {
        const elements = ref.current.querySelectorAll(`[${attr}]`);
        elements.forEach((el) => {
          const value = el.getAttribute(attr).trim();
          if (value) {
            attrNodes.push({ el, attr, value });
          }
        });
      });

      const allTexts = [
        ...textNodes.map((n) => n.textContent.trim()),
        ...attrNodes.map((a) => a.value),
      ];

      if (allTexts.length === 0) return;

      const translated = await translate(allTexts, language);
      console.log("three is here -----------------------------");

      // Apply translated text to text nodes
      textNodes.forEach((node, i) => {
        node.textContent = translated[i];
      });

      // Apply translated attributes
      attrNodes.forEach((item, i) => {
        const translatedIndex = i + textNodes.length;
        item.el.setAttribute(item.attr, translated[translatedIndex]);
      });
    };

    translateDOM();
  }, deps);
};

export default useTranslateDOMText;
