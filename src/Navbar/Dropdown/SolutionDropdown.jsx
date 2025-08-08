"use client";

import React, { useEffect, useState } from "react";
import { API_END_POINT } from "@/app/apicommon/apicommon";
import { translateText } from "@/utils/serverTranslate";
import { extractTextForTranslation, injectTranslatedText } from "@/utils/translateUtils";
import Image from "next/image";
import Link from "next/link";

const SolutionDropdown = ({ language }) => {
  const [rawProducts, setRawProducts] = useState(null);        // store original data
  const [translatedProducts, setTranslatedProducts] = useState(null); // store translated version
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndTranslate = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_END_POINT}/wp-json/acf/options/theme-general-settings?&_embed&acf_format=standard`,
          { next: { revalidate: 50 } }
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const rawData = await response.json();
        setRawProducts(rawData); // store raw for link

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

  const originalSubMenu = rawProducts.header_menu[0].main_menu[2].sub_menu;
  const translatedSubMenu = translatedProducts.header_menu[0].main_menu[2].sub_menu;

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

export default SolutionDropdown;
