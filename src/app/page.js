 import Footer from "@/Footer/Footer"; 
import Homeapi from "./Homeapi/Homeapi";
import { API_END_POINT, SITE_URL_POINT } from "./apicommon/apicommon";


export async function generateMetadata() {
  try {
    const response = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard`, 
      { next: { revalidate: 20 } }
    );
    
    const datas = await response.json();
    const data = datas[0] || {};
    const seo = data?.yoast_head_json || {};
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || `${SITE_URL_POINT}/`}`;

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

export default function Home() {
  return (
    <>
      <Homeapi />
      <Footer />
    </>
  );
}

