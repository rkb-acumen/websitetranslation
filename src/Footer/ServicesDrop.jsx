"use client";

import { API_END_POINT } from '@/app/apicommon/apicommon';
import { LanguageContext } from '@/context/LanguageContext';
import { translateText } from '@/utils/serverTranslate';
import { extractTextForTranslation, injectTranslatedText } from '@/utils/translateUtils';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';

const ServicesDrop = () => {
  const [products, setProducts] = useState(null);
  const [translatedMenu, setTranslatedMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchAndTranslate = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_END_POINT}/wp-json/acf/options/theme-general-settings?&_embed&acf_format=standard`,
          { next: { revalidate: 50 } }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();
        setProducts(data);

        // Step 1: Extract all text and their paths
        const { texts, paths } = extractTextForTranslation(data.header_menu[0].main_menu[1].sub_menu);

        // Step 2: Translate the extracted texts
        const translatedTexts = await translateText(texts, language);

        // Step 3: Inject translated texts back into the original structure
        const translatedSubMenu = injectTranslatedText(data.header_menu[0].main_menu[1].sub_menu, paths, translatedTexts);
        setTranslatedMenu(translatedSubMenu);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAndTranslate();
  }, [language]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {translatedMenu.map((val, idx) => (
        <li key={idx}>
          <Link href={val.sub_menu_link}>{val.sub_menu_name}</Link>
        </li>
      ))}
    </>
  );
};

export default ServicesDrop;
