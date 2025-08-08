import { API_END_POINT, SITE_URL_POINT } from '@/app/apicommon/apicommon';
import Footer from '@/Footer/Footer'
import Navbar from '@/Navbar/Navbar'
import Services from '@/Services/Services'
import { translateText } from '@/utils/serverTranslate';
import { extractTextForTranslation, injectTranslatedText } from '@/utils/translateUtils';
import { cookies } from 'next/headers';
import React from 'react'

export async function generateMetadata({ params: { slug } }) {
  try {
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?path=services&slug=${slug}&_embed&acf_format=standard`,
      { next: { revalidate: 20 } }
    );

    const datas = await response.json();
    const data = datas[0] || {};
    const seo = data?.yoast_head_json || {};
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || `${SITE_URL_POINT}/services/${slug}`}`;

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


const page = async ({ params: { slug } }) => {
  try {
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "en";

    // 1. Fetch and translate service data
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?parent=127&slug=${slug}&_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const rawServiceData = await response.json();
    const { texts: serviceTexts, paths: servicePaths } = extractTextForTranslation(rawServiceData);
    const translatedServiceTexts = await translateText(serviceTexts, language);
    const translatedServiceData = injectTranslatedText(rawServiceData, servicePaths, translatedServiceTexts);

    // 2. Fetch and translate blog data
    const blogresponse = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/posts?slug=&_embed&acf_format=standard&per_page=100`,
      { next: { revalidate: 50 } }
    );
    const rawBlogData = await blogresponse.json();
    const { texts: blogTexts, paths: blogPaths } = extractTextForTranslation(rawBlogData);
    const translatedBlogTexts = await translateText(blogTexts, language);
    const translatedBlogData = injectTranslatedText(rawBlogData, blogPaths, translatedBlogTexts);

    return (
      <div className="max-w-[2500px] mx-auto bg-white">
        <Navbar />
        {translatedServiceData.map((val) => (
          <div key={val.id}>
            <Services val={val} blogapi={translatedBlogData} slug={slug} rawBlogData={rawBlogData}/>
          </div>
        ))}
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching or translating data:", error);
    return (
      <div className="flex h-screen justify-center items-center text-center">
        <div>
          <div className="lds-spinner">
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
          </div>
          <h2 className="pt-5">Network issue please check your connection!</h2>
        </div>
      </div>
    );
  }
};

export default page;