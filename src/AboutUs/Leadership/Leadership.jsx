"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./Leadership.css"
import Image from 'next/image'
import HeadingAnimation from '@/components/Homecomponents/HeadingAnimation/HeadingAnimation'
import gsap from 'gsap/all'
import Popup from './Popup/popup'
import Popupfour from './Popupfour/Popupfour'

const Leadership = (
  {
    section_three_leaders,
    section_three_title,
    section_three_description,
    leaderloop,
  }
) => {
  HeadingAnimation("Leadership-head");
  const [isVisible, setIsVisible] = useState(null);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handlePopup = (index) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null);
    } else {
      setOpenPopupIndex(index);
    }
  };

  const [visiblePopup, setVisiblePopup] = useState(null);

  const toggleVisibility = (index) => {
    setVisiblePopup(visiblePopup === index ? null : index);
  }

  // const toggleVisibility = (index) => {
  //   const leaderPara = document.getElementById(`leader_Para-${index}`);
  //   const icon = document.querySelector(`.leadership_img_icon-${index}`);

  //   if (isVisible === index) {
  //     // Hide the element
  //     gsap.to(leaderPara, {
  //       duration: 0.6,
  //       opacity: 0,
  //       scale: 0.5,
  //       transformOrigin: 'top ',
  //       ease: 'power3.inOut',
  //       onComplete: () => {
  //         leaderPara.style.display = 'none';
  //       }
  //     });

  //     gsap.to(icon, {
  //       duration: 0.6,
  //       rotate: 0,
  //       ease: 'power3.inOut'
  //     });
  //     setIsVisible(null); // Reset visibility
  //   } else {
  //     leaderPara.style.display = 'block';
  //     gsap.fromTo(leaderPara,
  //       {
  //         opacity: 0,
  //         scale: 0.5,
  //         transformOrigin: 'top '
  //       },
  //       {
  //         duration: 0.6,
  //         opacity: 1,
  //         scale: 1,
  //         ease: 'power3.inOut'
  //       });

  //     gsap.to(icon, {
  //       duration: 0.6,
  //       rotate: 45,
  //       ease: 'power3.inOut'
  //     });
  //     setIsVisible(index); // Set current visible leader
  //   }
  // };

  const toggleVisibilitymob = (index) => {
    const leaderPara = document.getElementById(`leader_Para-mob-${index}`);
    const icon = document.querySelector(`.leadership_img_icon_mob-${index}`);

    if (isVisible === index) {
      gsap.to(leaderPara, {
        duration: 0.4,
        height: 0,
        opacity: 0,
        ease: 'power2.out',
        // overflow: 'hidden'
      });

      gsap.to(icon, {
        duration: 0.4,
        rotate: 0,
        ease: 'power2.out'
      });
      setIsVisible(null);
    } else {
      gsap.to(leaderPara, {
        duration: 0.4,
        height: 'auto',
        opacity: 1,
        ease: 'power2.out',
        // overflow: 'hidden'
      });

      gsap.to(icon, {
        duration: 0.4,
        rotate: 45,
        ease: 'power2.out'
      });
      setIsVisible(index);
    }
  };

  const [open, setopen] = useState(false)

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add('no-scroll');
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //   }
  // }, [open]);

  // useEffect(() => {
  //   if (openPopupIndex) {
  //     document.body.classList.add('no-scroll');
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //   }
  // }, [openPopupIndex]);



  const MobileToggle = (index) => {
    const content = document.getElementById(`four_leader_Para-mob-${index}`);
    const icon = document.querySelector(`.four_leadership_img_icon-${index}`);
    const isExpanded = content.style.height !== '0px' && content.style.height !== '';

    if (isExpanded) {
      // Collapse the content
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(icon, {
        duration: 0.4,
        rotate: 0,
        ease: 'power2.out'
      });
    } else {
      // Expand the content
      gsap.set(content, { height: 'auto' }); // Temporarily set to auto to get the height
      const targetHeight = content.scrollHeight; // Get the full height
      gsap.fromTo(content,
        { height: 0, opacity: 0 }, // Start from height 0 and opacity 0
        {
          height: targetHeight, // Animate to the full height
          opacity: 1, // Animate opacity to 1
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            content.style.height = 'auto'; // After the animation, set the height back to auto
          }
        }
      );
      gsap.to(icon, {
        duration: 0.4,
        rotate: 45,
        ease: 'power2.out'
      });
    }
  };

  return (
    <>
      <div className='Leadership-sec '>
        <div className='leadership-title'>
          {/*<h2 className='font-30 opacity-80 Leadership-head'>{section_three_title}</h2>*/}
          <h2 className='font-30 opacity-80'>{section_three_title}</h2>
        </div>
        <div className='leadership-row'>
          <div className='leadership-col'></div>

          <div className='leadership-col'>
            <div className='leadership-para-div'>
              <p>{section_three_description}</p>
            </div>
          </div>
        </div>

        {/* <div>
          <div className='leadership_img_div hidden md:block relative'><Image className='leadership-img' width={1200} height={600} src={section_three_desktop_ceo_image?.url} />
            <div onClick={toggleVisibility} className='leadership_img_icon_div hidden md:block cursor-pointer' >
              <Image width={100} height={100} className='leadership_img_icon' src="/Missionvision/About-add-icon.svg" />
            </div>
            <div id='leader_Para' className='hidden md:block xl:max-w-[420px] lg:max-w-[350px] md:max-w-[500px] bg-white p-5 rounded-2xl md:absolute md:bottom-[120px] md:right-8 text-justify font-14  ' style={{ display: 'none' }}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit ab beatae, dolor minus possimus repudiandae, quod eligendi pariatur voluptatem tenetur quasi sunt aperiam vero cupiditate aliquam temporibus vel animi nemo suscipit quae. Quam corrupti amet magnam adipisci saepe architecto dolore cum alias harum, illum doloremque ipsum libero, nulla ad.</p>
            </div>
          </div>

          <div className='leadership_img_div md:hidden'>
            <Image className='leadership-img' width={1200} height={600} src={section_three_mobile_ceo_image?.url} />

            <div onClick={toggleVisibilitymob} className='leadership_img_icon_div_mob md:hidden block cursor-pointer'>
              <Image width={100} height={100} className='leadership_img_icon' src="/Missionvision/About-add-icon.svg" />
            </div>
          </div>
          <div
            id='leader_Para-mob'
            className='xl:max-w-[420px] lg:max-w-[350px] bg-white sm:p-5 pb-5 rounded-2xl lg:absolute lg:bottom-[120px] lg:right-8 text-justify font-14 md:hidden'
            style={{ opacity: 0, height: 0, }}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit ab beatae, dolor minus possimus repudiandae, quod eligendi pariatur voluptatem tenetur quasi sunt aperiam vero cupiditate aliquam temporibus vel animi nemo suscipit quae. Quam corrupti amet magnam adipisci saepe architecto dolore cum alias harum, illum doloremque ipsum libero, nulla ad.</p>
          </div>

          <div className='leadership-border-title'>
            <p className='ceo-name'>{section_three_ceo_name} <a href={section_three_ceo_linked_in_url} target='_blank' className='social-icon-link'><Image width={100} height={100} className='leadership-social-icon' src="/Missionvision/linkedin-icon.svg" /></a></p>
            <p className='ceo-designation'>{section_three_ceo_designation}</p>

          </div>
        </div>
        <div>
          <div className='leadership_img_div hidden md:block relative'><Image className='leadership-img' width={1200} height={600} src={section_three_desktop_ceo_image?.url} />
            <div onClick={toggleVisibility} className='leadership_img_icon_div hidden md:block cursor-pointer' >
              <Image width={100} height={100} className='leadership_img_icon' src="/Missionvision/About-add-icon.svg" />
            </div>
            <div id='leader_Para' className='hidden md:block xl:max-w-[420px] lg:max-w-[350px] md:max-w-[500px] bg-white p-5 rounded-2xl md:absolute md:bottom-[120px] md:right-8 text-justify font-14  ' style={{ display: 'none' }}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit ab beatae, dolor minus possimus repudiandae, quod eligendi pariatur voluptatem tenetur quasi sunt aperiam vero cupiditate aliquam temporibus vel animi nemo suscipit quae. Quam corrupti amet magnam adipisci saepe architecto dolore cum alias harum, illum doloremque ipsum libero, nulla ad.</p>
            </div>
          </div>

          <div className='leadership_img_div md:hidden'>
            <Image className='leadership-img' width={1200} height={600} src={section_three_mobile_ceo_image?.url} />

            <div onClick={toggleVisibilitymob} className='leadership_img_icon_div_mob md:hidden block cursor-pointer'>
              <Image width={100} height={100} className='leadership_img_icon' src="/Missionvision/About-add-icon.svg" />
            </div>
          </div>
          <div
            id='leader_Para-mob'
            className='xl:max-w-[420px] lg:max-w-[350px] bg-white sm:p-5 pb-5 rounded-2xl lg:absolute lg:bottom-[120px] lg:right-8 text-justify font-14 md:hidden'
            style={{ opacity: 0, height: 0, }}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit ab beatae, dolor minus possimus repudiandae, quod eligendi pariatur voluptatem tenetur quasi sunt aperiam vero cupiditate aliquam temporibus vel animi nemo suscipit quae. Quam corrupti amet magnam adipisci saepe architecto dolore cum alias harum, illum doloremque ipsum libero, nulla ad.</p>
          </div>

          <div className='leadership-border-title'>
            <p className='ceo-name'>{section_three_ceo_name} <a href={section_three_ceo_linked_in_url} target='_blank' className='social-icon-link'><Image width={100} height={100} className='leadership-social-icon' src="/Missionvision/linkedin-icon.svg" /></a></p>
            <p className='ceo-designation'>{section_three_ceo_designation}</p>
          </div>
        </div> */}
        {section_three_leaders.slice(0, 1).map((leader, index) => (
          <div key={index}>
            {/* Desktop View */}
            <div className='leadership_img_div hidden md:block relative'>
              <Image
                className='leadership-img'
                width={1200}
                height={600}
                src={leader?.leader_desktop_image?.url}
                alt={leader?.leader_name}
              />
              <div
                onClick={() => { setopen(!open) }}
                className={`leadership_img_icon_div hidden md:block cursor-pointer leadership_img_icon-${index}`}
              >
                <Image
                  width={100}
                  height={100}
                  className='leadership_img_icon'
                  src='/Missionvision/About-add-icon.svg'
                  alt='Toggle description'
                />
              </div>

            </div>

            {/* <div
              id={`leader_Para-${index}`}
              className='hidden md:block xl:max-w-[100%] lg:max-w-[100%] md:max-w-[100%] bg-white p-5 rounded-2xl  md:bottom-[120px] md:right-8 text-justify font-14'
              style={{ display: 'none' }}
            >
              <div dangerouslySetInnerHTML={{ __html: leader?.leader_description }}></div>
            </div> */}

            {/* Mobile View */}
            <div className='leadership_img_div md:hidden'>
              <Image
                className='leadership-img'
                width={1200}
                height={600}
                src={leader?.leader_mobile_image?.url}
                alt={leader?.leader_name}
              />
              <div
                onClick={() => toggleVisibilitymob(index)}
                className={`leadership_img_icon_div_mob md:hidden block cursor-pointer leadership_img_icon_mob-${index}`}
              >
                <Image
                  width={100}
                  height={100}
                  className='leadership_img_icon'
                  src='/Missionvision/About-add-icon.svg'
                  alt='Toggle description'
                />
              </div>
            </div>

            <div
              id={`leader_Para-mob-${index}`}
              className='xl:max-w-[420px] lg:max-w-[350px] bg-white sm:p-5 pb-5 rounded-2xl lg:absolute lg:bottom-[120px] lg:right-8 text-justify font-14 md:hidden transition-all delay-100 '
              style={{ opacity: 0, height: 0 }}
            >
              <div dangerouslySetInnerHTML={{ __html: leader?.leader_description }}></div>
            </div>

            <div className='leadership-border-title transition-all delay-100'>
              <p className='ceo-name'>
                {leader?.leader_name}{' '}
                <a
                  href={leader?.leader_linked_in_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-icon-link'
                >
                  <Image
                    width={100}
                    height={100}
                    className='leadership-social-icon'
                    src='/Missionvision/linkedin-icon.svg'
                    alt='LinkedIn'
                  />
                </a>
              </p>
              <p className='ceo-designation'>{leader?.leader_designation}</p>
            </div>
          </div>
        ))}

      </div>

      <div className='px-[15px] md:px-[60px] pt-[60px]'>
        {/* For Desktop */}
        <div className='md:grid hidden sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {leaderloop?.map((val, index) => {
            return (<>
              <div >
                <div className='relative'>
                  <Image
                    src={val?.leaders_sub_image?.url}
                    alt={val?.leaders_sub_image?.alt}
                    width={200}
                    height={200}
                    className='w-full h-auto object-cover rounded-tr-[5rem]'
                  />
                  <div
                    onClick={() => handlePopup(index)}
                    className={`absolute bottom-2 left-2 cursor-pointer leadership_img_icon-${index}`}
                  >
                    <Image
                      width={100}
                      height={100}
                      className='w-[50px]'
                      src='/Missionvision/About-add-icon.svg'
                      alt='Toggle description '
                    />
                  </div>
                </div>
                <div className='leadership-border-title mt-5'>
                  <p className='text-[22px] py-1'>
                    {val?.leaders_sub_name}{' '}
                  </p>
                  <p className='text-[16px]'>{val?.leaders_sub_designation}</p>
                </div>

              </div>

            </>)
          })}
        </div>

        {/* For Mobile */}
        <div className='grid md:hidden sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {leaderloop?.map((val, index) => {
            return (<>
              <div >
                <div className='relative'>
                  <Image
                    src={val?.leaders_sub_image?.url}
                    alt={val?.leaders_sub_image?.alt}
                    width={200}
                    height={200}
                    className='w-full h-auto object-cover rounded-tr-[5rem] relative'
                  />
                  <div
                    onClick={() => MobileToggle(index)}
                    className={`absolute bottom-2 left-2 cursor-pointer four_leadership_img_icon-${index}`}
                  >
                    <Image
                      width={100}
                      height={100}
                      className='w-[50px]'
                      src='/Missionvision/About-add-icon.svg'
                      alt='Toggle description '
                    />
                  </div>
                </div>
                <div
                  id={`four_leader_Para-mob-${index}`}
                  className='xl:max-w-[420px] lg:max-w-[350px] bg-white py-5 sm:p-5 pb-5 rounded-2xl lg:absolute lg:bottom-[120px] lg:right-8 text-justify font-14 md:hidden transition-all delay-100 '
                  style={{ opacity: 0, height: 0 }}
                >
                  <div dangerouslySetInnerHTML={{ __html: val?.leaders_sub_description }}></div>
                </div>

                <div className='leadership-border-title mt-5'>
                  <p className='text-[22px] py-1'>
                    {val?.leaders_sub_name}{' '}
                  </p>
                  <p className='text-[16px]'>{val?.leaders_sub_designation}</p>
                </div>

              </div>

            </>)
          })}
        </div>
      </div>

      <Popup
        onclose={() => { setopen(!open) }}
        open={open}
        section_three_leaders={section_three_leaders}
      />
      {leaderloop?.map((val, index) => (
        <Popupfour
          key={index}
          onclose={() => setOpenPopupIndex(null)}
          open={openPopupIndex === index}
          leaderData={val}
        />
      ))}


    </>
  )
}

export default Leadership
