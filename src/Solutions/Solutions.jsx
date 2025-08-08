import React from 'react'
import BigDataSolutions from './BigDataSolutions/BigDataSolutions';
import IndustrySolutions from './IndustrySolutions/IndustrySolutions';
import OurBigDataSolutions from './OurBigDataSolutions/OurBigDataSolutions';
import OurClientSolutions from './OurClientSolutions/OurClientSolutions';
import SeamlessSolutions from './SeamlessSolutions/SeamlessSolutions';
import PartnerSolutions from './PartnerSolutions/PartnerSolutions';
import FAQSolutions from './FAQSolutions/FAQSolutions'; 
import BlogSolutions from './BlogSolutions/BlogSolutions';
import Newdata from './newdata/newdata';
import CommonBlog from '@/CommonBlog/CommonBlog';

const Solutions = ({ val , slug , blogapi, rawBlogData }) => {
  return (
    <>
     
      {
        (val?.acf?.banner_title || val?.acf?.banner_description || val?.acf?.banner_happy_customers_tag ||
          val?.acf?.banner_data_counter_1_number || val?.acf?.banner_data_counter_1_symbol ||
          val?.acf?.banner_data_counter_1_content || val?.acf?.banner_data_counter_2_number ||
          val?.acf?.banner_data_counter_2_symbol || val?.acf?.banner_data_counter_3_number ||
          val?.acf?.banner_data_counter_3_symbol || val?.acf?.banner_data_counter_2_content ||
          val?.acf?.banner_data_right_content || val?.acf?.banner_right_image?.url) && (
          <BigDataSolutions
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
         <Newdata new_section_two={val?.acf?.new_section_two}/>
       )} 
      

      {
        (val?.acf?.services_section_2_title || val?.acf?.services_section_2_grid?.length) && (
          <IndustrySolutions
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
          <OurBigDataSolutions
            video = {`${val?.acf?.services_section_3_video}`}
            services_section_3_title={val?.acf?.services_section_3_title}
            services_section_3_sub_title={val?.acf?.services_section_3_sub_title}
            banner_data_counter_3_contents={val?.acf?.banner_data_counter_3_contents}
            services_section_3_image={val?.acf?.services_section_3_image}
          />
        )
      }


      {
        (val?.acf?.services_section_4_title || val?.acf?.services_section_4_client_details?.length) && (
          <OurClientSolutions
            services_section_4_title={val?.acf?.services_section_4_title}
            services_section_4_client_details={val?.acf?.services_section_4_client_details}
          />
        )
      }


      {/* {(val?.acf?.services_section_5_title || val?.acf?.services_section_5_content.length) && (
        <SeamlessSolutions
          services_section_5_title={val?.acf?.services_section_5_title}
          services_section_5_content={val?.acf?.services_section_5_content}
          services_section_5_button={val?.acf?.services_section_5_button}
        />
      )} */}

      {(val?.acf?.services_section_6_title || val?.acf?.services_section_6_slider?.length) && (
        <PartnerSolutions
          services_section_6_slider={val?.acf?.services_section_6_slider}
        />
      )}

      {(val?.acf?.services_faq_title || val?.acf?.services_faq?.length) && (
        <FAQSolutions
          services_faq={val?.acf?.services_faq}
        />
      )}

      {/* <CaseStudies

            /> */}
     <BlogSolutions />
     <CommonBlog slug={slug} blogapi={blogapi} rawBlogData={rawBlogData}/>
    </>
  )
}

export default Solutions; 