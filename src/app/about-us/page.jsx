import AboutUs from '@/AboutUs/AboutUs'
import Footer from '@/Footer/Footer'
import Navbar from '@/Navbar/Navbar'
import React from 'react'
import { API_END_POINT, SITE_URL_POINT } from '../apicommon/apicommon';
import { extractTextForTranslation, injectTranslatedText } from '@/utils/translateUtils';
import { translateText } from '@/utils/serverTranslate';
import { cookies } from 'next/headers';

export async function generateMetadata() {
    try {
      const response = await fetch(
        `${API_END_POINT}/wp-json/wp/v2/pages?slug=about-us&_embed&acf_format=standard`, 
        { next: { revalidate: 20 } }
      );
      
      const datas = await response.json();
      const data = datas[0] || {};
      const seo = data?.yoast_head_json || {};
      const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || `${SITE_URL_POINT}/about-us`}`;
  
      return {
        title: seo.title || 'Default Title',
        description: seo.description || 'Default Description',
        robots: {
          index: seo.robots?.index || 'index',
          follow: seo.robots?.follow || 'follow',
        },
        canonical: seo.canonical || undefined,
        openGraph: {
          locale: seo.og_locale || 'en_US',
          type: seo.og_type || 'article',
          title: seo.og_title || seo.title || 'Default OG Title',
          description: seo.og_description || seo.description || 'Default OG Description',
          url: currentUrl,
          siteName: seo.og_site_name || 'Default Site Name',
          images: seo.og_image?.map(image => ({ url: image.url })) || [],
        },
        twitter: {
          card: seo.twitter_card || 'summary_large_image',
          title: seo.twitter_title || seo.title || 'Default Twitter Title',
          description: seo.twitter_description || seo.description || 'Default Twitter Description',
          ...seo.twitter_misc,
        },
      };
    } catch (error) {
      console.error("Error fetching SEO metadata:", error);
      return {
        title: 'Error',
        description: 'There was an error fetching the page data.',
      };
    }
  }

const page = async () => {
  try {
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "en";

    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?slug=about-us&_embed&acf_format=standard`,
      { next: { revalidate: 20 } }
    );

    const datas = await response.json();

    // 1. Extract all translatable text and paths
    const { texts, paths } = extractTextForTranslation(datas);

    // 2. Translate the extracted texts
    const translatedTexts = await translateText(texts, language);

    // 3. Inject translated text back into the original structure
    const translatedData = injectTranslatedText(datas, paths, translatedTexts);

    return (
      <>
        {translatedData.map((val) => (
          <div key={val.id} className="bg-white">
            <Navbar />
            <AboutUs val={val} />
            <Footer />
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="flex h-screen justify-center items-center text-center">
        <div>
          <div className="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div>
          </div>
          <h2 className="pt-5">Network issue, please check your connection!</h2>
        </div>
      </div>
    );
  }
};

export default page;