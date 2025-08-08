import NewSolution from '@/components/Homecomponents/NewSolution/NewSolution';
import OurServices from '@/components/Homecomponents/OurServices/OurServices';
import React from 'react';

const Colorchange = ({val, hrefData, solData}) => {
    return (
        <>
            {
                (val?.acf?.solution_two_title || val?.acf?.solution_two_content) && (
                    <NewSolution
                        section_two_title={val?.acf?.solution_two_title}
                        section_two_content={val?.acf?.solution_two_content}
                        hrefData={solData}
                    />
                )
            }
            {
                (val?.acf?.section_two_title || val?.acf?.section_two_content) && (
                    <OurServices
                        section_two_title={val?.acf?.section_two_title}
                        section_two_content={val?.acf?.section_two_content}
                        hrefData={hrefData}
                    />
                )
            }
        </>
    );
}

export default Colorchange;
