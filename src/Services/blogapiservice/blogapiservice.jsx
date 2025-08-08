import React from 'react';
import CaseStudies from '../CaseStudies/CaseStudies';
import { API_END_POINT } from '@/app/apicommon/apicommon';

const Blogapiservice = async () => {

    const resapi = await fetch(
        `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`,
        { next: { revalidate: 50 } }
    );
    const api = await resapi.json();

    return (
        <>
            <CaseStudies api={api} />
        </>
    );
}

export default Blogapiservice;
