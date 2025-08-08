"use client";
import React from "react";
import HeadingAnimation from "@/components/Homecomponents/HeadingAnimation/HeadingAnimation";
import PartnerSolutionsSlider from "./PartnerSolutionsSlider/PartnerSolutionsSlider";

const PartnerSolutions = ({ services_section_6_slider }) => {
   
  return (
    <>
      <div className="   pt-[110px]  px-[15px]">
        <h2 className="font-30  lg:px-[60px]  opacity-80 font-normal ">
          Partners in change
        </h2>
        <div className="lg:h-[80vh] h-[110vh]">
          <PartnerSolutionsSlider
            services_section_6_slider={services_section_6_slider}
          />
        </div>
      </div>
    </>
  );
};

export default PartnerSolutions;
