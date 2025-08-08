"use client";
import React from "react";
import Parterslider from "./parterslider";
import HeadingAnimation from "@/components/Homecomponents/HeadingAnimation/HeadingAnimation";

const Partnersinchange = ({ services_section_6_slider }) => {
  HeadingAnimation("text-partner");
  return (
    <>
      {services_section_6_slider && services_section_6_slider.length > 0 && (
        <div className="   pt-[110px]  px-[15px]">
          <h2 className="font-30  lg:px-[60px]  opacity-80 font-normal  ">
            Partners in change
          </h2>
          <div className="lg:h-[80vh] h-[110vh]">
            <Parterslider services_section_6_slider={services_section_6_slider} />
          </div>

        </div>
      )}
    </>
  );
};

export default Partnersinchange;
