import React from 'react'
import BlogInsight from '../BlogInsight/BlogInsight';
import { API_END_POINT } from '@/app/apicommon/apicommon';

const BlogApi = async ({find,translatedApi, rawAllBlogs}) => {
    const resapi = await fetch(
        `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`, 
        { next: { revalidate: 50 } }
    );
    const api = await resapi.json();
    return (
        <>
            <BlogInsight api={translatedApi} find={find} rawAllBlogs={rawAllBlogs} />
        </>
    )
}

export default BlogApi;