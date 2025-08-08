import { API_END_POINT, SITE_URL_POINT } from '@/app/apicommon/apicommon';
import BlogApi from '@/BlogDynamic/BlogApi/BlogApi';
import BlogDynamicIntro from '@/BlogDynamic/BlogDynamicIntro';
import BlogInsight from '@/BlogDynamic/BlogInsight/BlogInsight';
import KeyFeatures from '@/BlogDynamic/KeyFeatures';
import Footer from '@/Footer/Footer';
import Navbar from '@/Navbar/Navbar';
import { translateText } from '@/utils/serverTranslate';
import { extractTextForTranslation, injectTranslatedText } from '@/utils/translateUtils';
import { cookies } from 'next/headers';
import React from 'react';

export async function generateMetadata({ params: { slug } }) {
  try {
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/posts?slug=${slug}&_embed&acf_format=standard`, 
      { next: { revalidate: 20 } }
    );
    
    const datas = await response.json();
    const data = datas[0] || {};
    const seo = data?.yoast_head_json || {};
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || `${SITE_URL_POINT}/blog/${slug}`}`;

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

const Page = async ({ params: { slug } }) => {
  try {
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "en";

    // 1. Fetch full blog list (to pass to BlogApi)
    const allRes = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const rawAllBlogs = await allRes.json();
    const { texts, paths } = extractTextForTranslation(rawAllBlogs);
    const translatedTexts = await translateText(texts, language);
    const translatedBlogList = injectTranslatedText(rawAllBlogs, paths, translatedTexts);

    // 2. Fetch blog post by slug
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/posts?slug=${slug}&_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const rawBlogData = await response.json();
    const { texts: t2, paths: p2 } = extractTextForTranslation(rawBlogData);
    const translatedText2 = await translateText(t2, language);
    const translatedBlogData = injectTranslatedText(rawBlogData, p2, translatedText2);

    return (
      <div className="bg-white">
        <Navbar />
        {translatedBlogData.map((val) => (
          <React.Fragment key={val.id}>
            <BlogDynamicIntro val={val} />
            {val?.content?.rendered && (
              <>
                <KeyFeatures val={val} />
                <BlogApi find={val} translatedApi={translatedBlogList} rawAllBlogs={rawAllBlogs} />
              </>
            )}
          </React.Fragment>
        ))}
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Fetch Failed:", error);
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
