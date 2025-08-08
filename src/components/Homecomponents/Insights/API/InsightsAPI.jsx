// import React from 'react'
// import Insights from '../Insights';
// import { API_END_POINT } from '@/app/apicommon/apicommon';

// const InsightsAPI = async () => {
//     const resapi = await fetch(
//         `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`,
//         { next: { revalidate: 50 } }
//     );
//     const api = await resapi.json();
//     return (
//         <>
//             <Insights api={api} />
//         </>
//     )
// }

// export default InsightsAPI

// app/components/Homecomponents/Insights/API/InsightsAPI.jsx
// app/components/Homecomponents/Insights/API/InsightsAPI.jsx
import React from 'react';
import Insights from '../Insights';
import { API_END_POINT } from '@/app/apicommon/apicommon';
import { cookies } from 'next/headers';
import { translateText } from '@/utils/serverTranslate';

const InsightsAPI = async () => {
  try {
    const cookieStore = cookies();
    const language = cookieStore.get('language')?.value || 'en';

    const resapi = await fetch(
      `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`,
      { next: { revalidate: 50 } }
    );
    const data = await resapi.json();

    // Filter only "Home" category posts
    const filteredData = data.filter(post =>
      post?._embedded?.['wp:term']?.[0]?.some(term => term.name === 'Home')
    );

    if (language === 'en') {
      return <Insights api={filteredData} />;
    }

    // Collect fields for translation
    const textsToTranslate = [];
    const map = [];

    filteredData.forEach((post, index) => {
      if (post?.title?.rendered) {
        textsToTranslate.push(post.title.rendered);
        map.push({ index, key: 'title.rendered' });
      }
      if (post?.acf?.user_name) {
        textsToTranslate.push(post.acf.user_name);
        map.push({ index, key: 'acf.user_name' });
      }
      if (post?.excerpt?.rendered) {
        const plainExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, '');
        textsToTranslate.push(plainExcerpt);
        map.push({ index, key: 'excerpt.rendered' });
      }
    });

    const translatedTexts = await translateText(textsToTranslate, language);

    // Inject translations
    const translatedData = filteredData.map((post, i) => ({ ...post }));

    map.forEach(({ index, key }, i) => {
      const [parent, child] = key.split('.');
      if (child === 'rendered' && key.includes('excerpt')) {
        // Re-wrap excerpt in paragraph tag
        translatedData[index][parent][child] = `<p>${translatedTexts[i]}</p>`;
      } else {
        translatedData[index][parent][child] = translatedTexts[i];
      }
    });

    return <Insights api={translatedData} />;
  } catch (error) {
    console.error('Error loading insights:', error);
    return <div>Error loading insights.</div>;
  }
};

export default InsightsAPI;
