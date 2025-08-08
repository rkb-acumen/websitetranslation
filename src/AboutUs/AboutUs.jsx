import React from 'react'
import OurHighlight from './OurHighlight/OurHighlight'
import AboutIntro from './AboutIntro/AboutIntro'
import AboutLeadership from './AboutLeadership'
import OurMission from './OurMission/OurMission'


const AboutUs = ({ val }) => {
  return (
    <> 
      {
        (val?.acf?.section_one_title || val?.acf?.section_one_image || val?.acf?.section_one_para) && (
          <AboutIntro
            section_one_title={val?.acf?.section_one_title}
            section_one_image={val?.acf?.section_one_image}
            section_one_para={val?.acf?.section_one_para}
          />
        )
      }
      <div className='BgForSections'> 
        {
          (val?.acf?.mission_vision_content) && (
            <OurMission
              mission_vision_content={val?.acf?.mission_vision_content}
            />
          )
        }
        {
          (val?.acf?.section_two_title || val?.acf?.section_two_sub_section?.length) && (
            <OurHighlight
              section_two_title={val?.acf?.section_two_title}
              section_two_sub_section={val?.acf?.section_two_sub_section}
            />
          )
        }
      </div>

      {
        (val) && (
          <AboutLeadership val={val} />
        )
      }



    </>
  )
}

export default AboutUs