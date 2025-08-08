"use client";
import gsap from "gsap/all";
import React, { useState } from "react";
import "./FAQSolutions.css";
import HeadingAnimation from "@/components/Homecomponents/HeadingAnimation/HeadingAnimation";

const FAQSolutions = ({ services_faq }) => {
  const [accordionData1] = useState(services_faq);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);

    const content = document.querySelector(`.accordion-content-${index}`);
    const rect1 = document.querySelector(`.svg-rect-1-${index}`);
    const rect2 = document.querySelector(`.svg-rect-2-${index}`);

    if (isOpen) {
      gsap.to(content, {
        height: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(rect1, {
        duration: 0.5,
        rotation: 0,
        transformOrigin: "center",
        ease: "power2.out",
      });

      gsap.to(rect2, {
        duration: 0.5,
        rotation: 90,
        transformOrigin: "center",
        ease: "power2.out",
      });
    } else {
      // Close the currently open accordion (if any)
      if (openIndex !== null) {
        const currentContent = document.querySelector(
          `.accordion-content-${openIndex}`
        );
        const currentRect1 = document.querySelector(`.svg-rect-1-${openIndex}`);
        const currentRect2 = document.querySelector(`.svg-rect-2-${openIndex}`);

        gsap.to(currentContent, {
          height: 0,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(currentRect1, {
          duration: 0.5,
          rotation: 0,
          transformOrigin: "center",
          ease: "power2.out",
        });

        gsap.to(currentRect2, {
          duration: 0.5,
          rotation: 90,
          transformOrigin: "center",
          ease: "power2.out",
        });
      }

      // Open the clicked accordion
      gsap.to(content, {
        duration: 0.5,
        height: "auto",
        ease: "power2.out",
        onStart: () => {
          content.style.height = "auto";
          const fullHeight = content.clientHeight;
          content.style.height = "0px";
          gsap.to(content, {
            height: fullHeight,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });

      gsap.to(rect1, {
        duration: 0.5,
        rotation: 90,
        transformOrigin: "center",
        ease: "power2.out",
      });

      gsap.to(rect2, {
        duration: 0.5,
        rotation: 90,
        transformOrigin: "center",
        ease: "power2.out",
      });
    }
  };
  HeadingAnimation("text-faq");

  return (
    <>
      <div className="FAQ sm:py-0  ">
        <div className="FAQ-heading md:p-[60px] p-[15px] ">
          <h2 className="font-30 opacity-80 font-normal ">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="lg:px-[60px] md:px-[30px] px-[15px] flex justify-end items-center pt-5 md:pt-0">
          <div className="md:w-[80%] pb-5">
            {accordionData1.map((item, index) => (
              <div
                key={item.id}
                className=" accord w-full border border-[#D7D7D7] border-x-0 border-t-0  sm:py-5 py-1"
              >
                <div
                  className="flex justify-between gap-2 items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="md:text-[20px]  font-normal text-[16px]  py-5">
                    <p>{item.services_faq_question}</p>
                  </div>
                  <div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className={`svg-rect-1-${index}`}
                        x="10"
                        width="2"
                        height="22"
                        rx="1"
                        fill="black"
                      />
                      <rect
                        className={`svg-rect-2-${index}`}
                        x="22"
                        y="10"
                        width="2"
                        height="22"
                        rx="1"
                        transform="rotate(90 22 10)"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`accordion-content accordion-content-${index} md:text-[16px] text-[14px] text-justify overflow-hidden ${
                    openIndex === index ? "open" : ""
                  }`}
                  style={{ height: 0 }}
                >
                  <div className="py-4">
                    <p>{item.services_faq_answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSolutions;
