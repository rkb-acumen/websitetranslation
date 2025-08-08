import React from 'react'
import Leadership from './Leadership/Leadership'
import ActiveClient from './ActiveClient/ActiveClient'
import "./AboutLeadership.css"


const AboutLeadership = ({ val }) => {
  return (
    <>
      {
  (val?.acf?.section_three_title || 
    val?.acf?.section_three_description || 
    val?.acf?.section_three_desktop_ceo_image || 
    val?.acf?.section_three_mobile_ceo_image || 
    val?.acf?.section_three_ceo_name || 
    val?.acf?.section_three_ceo_designation || 
    val?.acf?.section_three_ceo_linked_in_url || 
    val?.acf?.section_three_sub_leaders	
  ) && (
    <div className='leadership-bg'>
      <Leadership
        section_three_title={val?.acf?.section_three_title}
        section_three_description={val?.acf?.section_three_description}
        // section_three_desktop_ceo_image={val?.acf?.section_three_desktop_ceo_image}
        // section_three_mobile_ceo_image={val?.acf?.section_three_mobile_ceo_image}
        // section_three_ceo_name={val?.acf?.section_three_ceo_name}
        // section_three_ceo_designation={val?.acf?.section_three_ceo_designation}
        // section_three_ceo_linked_in_url={val?.acf?.section_three_ceo_linked_in_url}
        section_three_leaders={val?.acf?.section_three_leaders}
        leaderloop = {val?.acf?.section_three_sub_leaders	}
      />

      {(val?.acf?.counter_content) && (
        <ActiveClient
          counter_content={val?.acf?.counter_content}
        />
      )}
    </div>
  )
}
    </>
  )
}

export default AboutLeadership