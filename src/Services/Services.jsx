import React from 'react'
import DataSoultions from './DataSolutions/DataSoultions'
import Industry from './Industry/Industry'
import OurClient from './OurClient/OurClient'
import OurBigDataService from './OurBigDataService/OurBigDataService'
import Seamless from './Seamless/Seamless'
import Partnersinchange from './partnersinchange/partnersinchange'
import FAQ from './FAQ/FAQ'
import CaseStudies from './CaseStudies/CaseStudies'
import Blogapiservice from './blogapiservice/blogapiservice'
import Newdataservice from './newdataservice/newdataservice'
import CommonBlog from '@/CommonBlog/CommonBlog'


const Services = ({ val , blogapi , slug ,rawBlogData }) => {

    return (
        <>
            {
                (val?.acf?.banner_title || val?.acf?.banner_description || val?.acf?.banner_happy_customers_tag ||
                    val?.acf?.banner_data_counter_1_number || val?.acf?.banner_data_counter_1_symbol ||
                    val?.acf?.banner_data_counter_1_content || val?.acf?.banner_data_counter_2_number ||
                    val?.acf?.banner_data_counter_2_symbol || val?.acf?.banner_data_counter_3_number ||
                    val?.acf?.banner_data_counter_3_symbol || val?.acf?.banner_data_counter_2_content ||
                    val?.acf?.banner_data_right_content || val?.acf?.banner_right_image?.url) && (
                    <DataSoultions
                        banner_title={val?.acf?.banner_title}
                        banner_description={val?.acf?.banner_description}
                        banner_happy_customers_tag={val?.acf?.banner_happy_customers_tag}
                        banner_data_counter_1_number={val?.acf?.banner_data_counter_1_number}
                        banner_data_counter_1_symbol={val?.acf?.banner_data_counter_1_symbol}
                        banner_data_counter_1_content={val?.acf?.banner_data_counter_1_content}
                        banner_data_counter_2_number={val?.acf?.banner_data_counter_2_number}
                        banner_data_counter_2_symbol={val?.acf?.banner_data_counter_2_symbol}
                        banner_data_counter_2_content={val?.acf?.banner_data_counter_2_content}
                        banner_data_counter_3_number={val?.acf?.banner_data_counter_3_number}
                        banner_data_counter_3_symbol={val?.acf?.banner_data_counter_3_symbol}
                        banner_data_counter_3_content={val?.acf?.banner_data_counter_3_content}
                        banner_data_right_content={val?.acf?.banner_data_right_content}
                        banner_right_image_url={val?.acf?.banner_right_image?.url}
                        banner_right_image_alt={val?.acf?.banner_right_image?.alt}
                        banner_video_section={val?.acf?.banner_video_section}
                    />
                )
            }
            {val?.acf?.new_section_two && (
                <Newdataservice new_section_two={val?.acf?.new_section_two} />
            )}

            {
                (val?.acf?.services_section_2_title || val?.acf?.services_section_2_grid?.length) && (
                    <Industry
                        services_section_2_title={val?.acf?.services_section_2_title}
                        services_section_2_grid={val?.acf?.services_section_2_grid}
                    />
                )
            }

            {
                (val?.acf?.services_section_3_title ||
                    val?.acf?.services_section_3_sub_title ||
                    val?.acf?.services_section_3_sub_content ||
                    val?.acf?.services_section_3_image ||
                    val?.acf?.services_section_3_video
                ) && (
                    <OurBigDataService
                        video={`${val?.acf?.services_section_3_video}`}
                        services_section_3_title={val?.acf?.services_section_3_title}
                        services_section_3_sub_title={val?.acf?.services_section_3_sub_title}
                        banner_data_counter_3_contents={val?.acf?.banner_data_counter_3_contents}
                        services_section_3_image={val?.acf?.services_section_3_image}
                    />
                )
            }


            {
                (val?.acf?.services_section_4_title || val?.acf?.services_section_4_client_details?.length) && (
                    <OurClient
                        services_section_4_title={val?.acf?.services_section_4_title}
                        services_section_4_client_details={val?.acf?.services_section_4_client_details}
                    />
                )
            }


            {/* {(val?.acf?.services_section_5_title || val?.acf?.services_section_5_content.length) && (
                <Seamless
                    services_section_5_title={val?.acf?.services_section_5_title}
                    services_section_5_content={val?.acf?.services_section_5_content}
                    services_section_5_button={val?.acf?.services_section_5_button}
                />
            )} */}

            {(val?.acf?.services_section_6_title || val?.acf?.services_section_6_slider?.length) && (
                <Partnersinchange
                    services_section_6_slider={val?.acf?.services_section_6_slider}
                />
            )}

            {(val?.acf?.services_faq_title || val?.acf?.services_faq?.length) && (
                <FAQ
                    services_faq={val?.acf?.services_faq}
                />
            )}

            {/* <CaseStudies

            /> */}
            <Blogapiservice />
            <CommonBlog blogapi={blogapi} slug={slug} rawBlogData={rawBlogData}/>
        </>
    )
}

export default Services