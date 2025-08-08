// "use client"
// import React, { useState } from 'react'
// import "./BlogMain.css"
// import Image from 'next/image'
// import Link from 'next/link'

// const BlogMain = ({ val }) => {

//     const blogFilters = [
//         { label: "All", value: "All" },
//         { label: "Big Data Solutions Case", value: "Big Data Solutions Case" },
//         { label: "Marketing", value: "Marketing" },
//         { label: "Cloud and AI", value: "Cloud AI" },
//         { label: "Open Source", value: "Open Source" },
//     ];

//     const [dynamic, setdynamic] = useState("All")
//     return (
//         <>
//             < div>
//                 <div className='blog-title-main-div'>
//                     <div className='blog-title-inner-div'>
//                         <div className='custom-row'>
//                             <div className='blog-sec1-col'>
//                                 <div className='blog-title-div'>
//                                     <h1 className='font-50'> Insights</h1>


//                                 </div>

//                             </div>
//                             <div className='blog-sec1-col'>
//                                 <p className='font-14 contact-head'><span className='blog-dot-gradiant'></span><span className='blog-dot-gradiant blog-dot-rightmargin'></span>Categorires</p>

//                             </div>



//                             <div className='blog-sec1-col'>
//                                 <ul className='blogfilter-list'>
//                                     {blogFilters.map((filter, index) => (
//                                         <li key={index}>
//                                             <button
//                                                 className='blogfilterbtn'
//                                                 onClick={() => setdynamic(filter.value)}
//                                             >
//                                                 {filter.label}
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//                 <div className='blog-grid'>
//                     <div className='custom-row'>
//                         {
//                             val.map((val) => {
//                                 if (val?._embedded?.['wp:term']?.[0]?.map((elem) => elem?.name)?.includes(dynamic)) {
//                                     return (
//                                         <>

//                                             <div className='blog-col2'>
//                                                 <Link href={`/blog/${val.slug}`}>
//                                                     <div >

//                                                         <div className='inslghts-title-main'>
//                                                             <div className='blog-title-div blog-title-div-bg1 p-5 rounded-2xl  relative bigdatacolor'>
//                                                                 <div className='flex gap-2 '>
//                                                                     <div>
//                                                                         <Image

//                                                                             src={'/insights/logo.png'}
//                                                                             width={300}
//                                                                             height={300}
//                                                                             className='blog-client-img'
//                                                                         />
//                                                                     </div>
//                                                                     <div className='flex justify-center items-center'>
//                                                                         <div>
//                                                                             <p className='text-[#FFF0F3] font-12'>{val?.acf?.user_name}</p>
//                                                                             <p className='text-[#FFF0F3] font-12'>{val?.date.split('T')[0]}</p>
//                                                                         </div>
//                                                                     </div>

//                                                                 </div>
//                                                                 <div className='font-20 blog-title text-left text-white'>
//                                                                     <p>{val?.title?.rendered}</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                         <div className='text-[#454545] font-14 pt-7 px-0 sm:px-4 text-left '>
//                                                             <div ><ul className='blog-time-tag'>
//                                                                 <li><Image 
//                                                                 className='blog-clock-icon' 
//                                                                 width={30} 
//                                                                 height={30} 
//                                                                 src="/Blog/clock.svg" 
//                                                                 alt='clock'
//                                                                 />
                                                                
//                                                                 <span className='blog-time'>{(() => {
//                                                                     const time = val?.date.split('T')[1].split(':');
//                                                                     let hours = parseInt(time[0], 10);
//                                                                     const minutes = time[1];
//                                                                     // const period = hours >= 12 ? 'PM' : 'AM';
//                                                                     hours = hours % 12 || 12;
//                                                                     return `${hours}:${minutes} `;
//                                                                 })()}
//                                                                 </span>
//                                                                 </li>
//                                                                 {val?._embedded['wp:term']['0']
//                                                                     ?.filter(term => term?.name !== 'All' && term?.name !== 'Blog' && term?.name !== 'Home')
//                                                                     .map((term, index) => (
//                                                                         <li key={index}>
//                                                                             <span className='blog-time-button'>
//                                                                                 {term?.name}
//                                                                             </span>
//                                                                         </li>
//                                                                     ))}
//                                                             </ul></div>
//                                                         </div>

//                                                     </div>
//                                                 </Link>
//                                             </div>

//                                         </>
//                                     )
//                                 }

//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BlogMain

"use client";
import React, { useContext, useEffect, useState } from "react";
import "./BlogMain.css";
import Image from "next/image";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";
import { translateText } from "@/utils/serverTranslate";

const BlogMain = ({ val, apiData }) => {
  const { language } = useContext(LanguageContext);

  const [dynamic, setDynamic] = useState("All");
  const [translatedFilters, setTranslatedFilters] = useState([
    { label: "All", value: "All" },
    { label: "Big Data Solutions Case", value: "Big Data Solutions Case" },
    { label: "Marketing", value: "Marketing" },
    { label: "Cloud and AI", value: "Cloud AI" },
    { label: "Open Source", value: "Open Source" },
  ]);
  const [translatedTitle, setTranslatedTitle] = useState("Insights");
  const [translatedCategories, setTranslatedCategories] = useState("Categories");
  const [excludedCategories, setExcludedCategories] = useState([]);

  useEffect(() => {
    const translateLabels = async () => {
      const labels = [
        "All",
        "Big Data Solutions Case",
        "Marketing",
        "Cloud and AI",
        "Open Source",
        "Insights",
        "Categories",
        "Blog",
        "Home",
      ];

      const [
        all,
        bigData,
        marketing,
        cloudAI,
        openSource,
        insights,
        categories,
        blog,
        home,
      ] = await translateText(labels, language);

      setTranslatedFilters([
        { label: all, value: "All" },
        { label: bigData, value: "Big Data Solutions Case" },
        { label: marketing, value: "Marketing" },
        { label: cloudAI, value: "Cloud AI" },
        { label: openSource, value: "Open Source" },
      ]);

      setTranslatedTitle(insights);
      setTranslatedCategories(categories);
      setExcludedCategories([all, blog, home]);
    };

    translateLabels();
  }, [language]);

  return (
    <div>
      <div className="blog-title-main-div">
        <div className="blog-title-inner-div">
          <div className="custom-row">
            <div className="blog-sec1-col">
              <div className="blog-title-div">
                <h1 className="font-50">{translatedTitle}</h1>
              </div>
            </div>
            <div className="blog-sec1-col">
              <p className="font-14 contact-head">
                <span className="blog-dot-gradiant"></span>
                <span className="blog-dot-gradiant blog-dot-rightmargin"></span>
                {translatedCategories}
              </p>
            </div>
            <div className="blog-sec1-col">
              <ul className="blogfilter-list">
                {translatedFilters.map((filter, index) => (
                  <li key={index}>
                    <button
                      className={`blogfilterbtn ${dynamic === filter.value ? "active-filter" : ""}`}
                      onClick={() => setDynamic(filter.value)}
                    >
                      {filter.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-grid">
        <div className="custom-row">
          {val.map((valItem, i) => {
            const categoryNames =
              apiData[i]?._embedded?.["wp:term"]?.[0]?.map((elem) => elem?.name) || [];

            if (dynamic === "All" || categoryNames.includes(dynamic)) {
              return (
                <div className="blog-col2" key={valItem.id}>
                  <Link href={`/blog/${apiData[i].slug}`}>
                    <div>
                      <div className="inslghts-title-main">
                        <div className="blog-title-div blog-title-div-bg1 p-5 rounded-2xl relative bigdatacolor">
                          <div className="flex gap-2">
                            <div>
                              <Image
                                src={valItem.acf.user_image.url}
                                alt={valItem.acf.user_image.alt}
                                width={130}
                                height={130}
                                className="rounded-full h-14 w-14 border-2 object-cover border-[#D6D6D6]"
                                priority
                              />
                            </div>
                            <div className="flex justify-center items-center">
                              <div>
                                <p className="text-[#FFF0F3] font-12">{valItem?.acf?.user_name}</p>
                                <p className="text-[#FFF0F3] font-12">
                                  {apiData[i]?.date.split("T")[0]}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="font-20 blog-title text-left text-white">
                            <p>{valItem?.title?.rendered}</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#454545] font-14 pt-7 px-0 sm:px-4 text-left">
                        <ul className="blog-time-tag">
                          <li>
                            <Image
                              className="blog-clock-icon"
                              width={30}
                              height={30}
                              src="/Blog/clock.svg"
                              alt="clock"
                            />
                            <span className="blog-time">
                              {(() => {
                                const time = apiData[i]?.date.split("T")[1].split(":");
                                let hours = parseInt(time[0], 10);
                                const minutes = time[1];
                                hours = hours % 12 || 12;
                                return `${hours}:${minutes}`;
                              })()}
                            </span>
                          </li>
                          {valItem?._embedded?.["wp:term"]?.[0]
                            ?.filter((term) => !excludedCategories.includes(term?.name))
                            .map((term, index) => (
                              <li key={index}>
                                <span className="blog-time-button">{term?.name}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
