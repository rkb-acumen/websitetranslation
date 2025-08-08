import Contact from '@/Contact/Contact';
import React from 'react'
import { API_END_POINT } from '../apicommon/apicommon';


async function getdata() {
    try {
        const response = await fetch(
            `${API_END_POINT}/wp-json/wp/v2/pages?slug=contact-us&_embed&acf_format=standard`,
            { next: { revalidate: 50 } }
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
const Contactapi = async () => {


    try {
        const response = await fetch(
            `${API_END_POINT}/wp-json/wp/v2/pages?slug=contact-us&_embed&acf_format=standard`,
            { next: { revalidate: 50 } }
        );
        const datas = await response.json();
        return (
            <>
                {
                    datas.map((val) => {
                        return (
                            <Contact
                                section_one_title_desktop={val?.acf?.section_one_title_desktop}
                                section_one_title_mobile={val?.acf?.section_one_title_mobile}
                                section_one_content={val?.acf?.section_one_content}
                                section_one_image={val?.acf?.section_one_image}
                                section_one_={val?.acf?.section_one_}
                                section_email_id={val?.acf?.section_email_id}
                                section_phone_number={val?.acf?.section_phone_number}
                            />
                        )
                    })
                }
            </>
        )
    } catch (error) {
        console.error("Error fetching data:", error);
        return <div className='flex h-screen justify-center items-center text-center'>
            <div>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <h2 className='pt-5'>Network issue please check your connection!</h2>
            </div>
        </div>; 
    }

}

export default Contactapi