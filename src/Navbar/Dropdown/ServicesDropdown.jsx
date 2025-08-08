"use client";

import { API_END_POINT } from '@/app/apicommon/apicommon';
import { translateText } from '@/utils/serverTranslate';
import { extractTextForTranslation, injectTranslatedText } from '@/utils/translateUtils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ServicesDropdown = ({ language }) => {
  const [rawProducts, setRawProducts] = useState(null); // Store original data for links
  const [translatedProducts, setTranslatedProducts] = useState(null); // Store translated data for UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndTranslate = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_END_POINT}/wp-json/acf/options/theme-general-settings?&_embed&acf_format=standard`
        );

        if (!response.ok) throw new Error("Failed to fetch data");

        const rawData = await response.json();
        setRawProducts(rawData); // Save raw for links

        const { texts, paths } = extractTextForTranslation(rawData);
        const translatedTexts = await translateText(texts, language);
        const translatedData = injectTranslatedText(rawData, paths, translatedTexts);

        setTranslatedProducts(translatedData);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAndTranslate();
  }, [language]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!translatedProducts || !rawProducts) return null;

  const originalSubMenu = rawProducts.header_menu[0].main_menu[1].sub_menu;
  const translatedSubMenu = translatedProducts.header_menu[0].main_menu[1].sub_menu;

  return (
    <>
      {translatedSubMenu.map((val, index) => (
        <li key={originalSubMenu[index].sub_menu_link}>
          <Link href={originalSubMenu[index].sub_menu_link}>
            <div className="menu_product_grid">
              <Image
                className="desktop-submenu_arrow"
                width={50}
                height={50}
                src="/Navbar/submenu-arow-icon.svg"
                alt="submenu arrow"
              />
              <p dangerouslySetInnerHTML={{ __html: val.sub_menu_name }}></p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default ServicesDropdown;
