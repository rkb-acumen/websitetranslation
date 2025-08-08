import { cookies } from 'next/headers';
import { API_END_POINT } from '@/app/apicommon/apicommon';
import BlogMain from '@/BlogMain/BlogMain';
import React from 'react';
import { extractTextForTranslation, injectTranslatedText } from '@/utils/translateUtils';
import { translateText } from '@/utils/serverTranslate';

const BlogMainApi = async () => {
  try {
    // Get language from cookies
    const cookieStore = cookies();
    const language = cookieStore.get('language')?.value || 'en';

    // Fetch blog posts
    const resapi = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const api = await resapi.json();

    // Translation
    const { texts, paths } = extractTextForTranslation(api);
    const translatedTexts = await translateText(texts, language);
    const translatedData = injectTranslatedText(api, paths, translatedTexts);

    // Render
    return (
      <>
        <BlogMain val={translatedData} apiData={api} />
      </>
    );
  } catch (error) {
    console.error('Fetch Failed:', error);
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

export default BlogMainApi;
