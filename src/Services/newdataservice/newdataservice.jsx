import React from 'react';
import "./newdataservice.css"


const Newdataservice = ({new_section_two}) => {
    return (
        <>
        {new_section_two.map((val) => {
            return (
                <>
                    {/* {val?.new_section_two_content ||
                        val?.new_section_two_image?.url && ( */}
                            <div className='md:px-[60px] md:py-[90px] pt-[0px] pb-[90px] px-[15px]'>
                                <h2 className='font-30'>{val?.new_section_two_content}</h2>
                                <div className='pt-10 container-image-div'>
                                    <Image
                                        src={val?.new_section_two_image?.url}
                                        alt={val?.new_section_two_image?.alt}
                                        width={750}
                                        height={750}
                                        className='container-image-div object-contain'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                <Link className="pt-10" href={val?.new_section_two_url}>
                                    <svg
                                        width="197"
                                        height="59"
                                        viewBox="0 0 197 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_i_1595_34)">
                                            <path
                                                d="M196.5 9.22009L187.499 -1.81198e-05H0V49.7575L8.04022 58.0167H196.5V18.0201"
                                                fill="#ff9213"
                                            />
                                        </g>
                                        <text
                                            x="50%"              // Horizontal alignment: 50% of SVG width
                                            y="50%"              // Vertical alignment: 50% of SVG height
                                            dominantBaseline="middle" // Align text vertically to the center
                                            textAnchor="middle"       // Align text horizontally to the center
                                            fill="white"              // Text color
                                            fontSize="16"             // Font size (adjust as needed)
                                            fontFamily="Arial, sans-serif" // Font family
                                        >
                                            Learn More
                                        </text>
                                        <defs>
                                            <filter
                                                id="filter0_i_1595_34"
                                                x="0"
                                                y="0"
                                                width="196.5"
                                                height="62.0168"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.617708 0 0 0 0 0.396142 0 0 0 0 0.396142 0 0 0 0.25 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="shape"
                                                    result="effect1_innerShadow_1595_34"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </Link>
                                </div>
                            </div>
                        {/* )} */}
                </>
            )
        })}

    </>
    );
}

export default Newdataservice;
