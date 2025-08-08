import React from "react";
import Navbar from "@/Navbar/Navbar";
import Footer from "@/Footer/Footer";
import Contact from "@/Contact/Contact";
import { API_END_POINT, SITE_URL_POINT } from "../apicommon/apicommon";
import { cookies } from "next/headers";
import { extractTextForTranslation, injectTranslatedText } from "@/utils/translateUtils";
import { translateText } from "@/utils/serverTranslate";

export async function generateMetadata() {
  try {
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?slug=contact-us&_embed&acf_format=standard`,
      { next: { revalidate: 20 } }
    );
    const datas = await response.json();
    const data = datas[0] || {};
    const seo = data?.yoast_head_json || {};
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || `${SITE_URL_POINT}/contact-us`}`;

    return {
      title: seo.title || 'Contact Title',
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

const Page = async () => {
  try {
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "en";

    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?slug=contact-us&_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const rawData = await response.json();

    const { texts, paths } = extractTextForTranslation(rawData);
    const translatedTexts = await translateText(texts, language);
    const translatedData = injectTranslatedText(rawData, paths, translatedTexts);

    return (
      <div className="bg-white">
        <Navbar />
        <div className="Contact">
          {translatedData.map((val) => (
            <Contact
              key={val.id}
              section_one_title_desktop={val?.acf?.section_one_title_desktop}
              section_one_title_mobile={val?.acf?.section_one_title_mobile}
              section_one_content={val?.acf?.section_one_content}
              section_one_image={val?.acf?.section_one_image}
              section_one_={val?.acf?.section_one_}
              section_email_id={val?.acf?.section_email_id}
              section_phone_number={val?.acf?.section_phone_number}
              language={language}
            />
          ))}
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Page rendering error:", error);
    return (
      <div className="flex h-screen justify-center items-center text-center">
        <div>
          <div className="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
          <h2 className="pt-5">Network issue please check your connection!</h2>
        </div>
      </div>
    );
  }
};

export default Page;
