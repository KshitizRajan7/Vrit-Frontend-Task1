'use client'
import React, { useState } from 'react'
import TextComponent from './TextComponent'
import TextHover from './hover/TextHover'
import VideoHover from './hover/VideoHover'

const TestimonialBottom = ({ hoveredComponent }) => {
    const [hovered, isHovered] = useState(false);
    const [videoHovered, isVideoHovered] = useState(false);
    return (
        <div>
            <div className="w-[630px] h-[341px] opacity-100 rotate-0 rounded-xl p-6  flex justify-center items-center ">
                <div className={`${hoveredComponent ? 'transition-all duration-[2000ms] ease-in-out group' : 'group'}`}>
                    <img src='assets/gif/love.gif' className={`w-[96px] h-[97px] absolute top-[213px] left-[32px] rounded-[32px] opacity-100 mix-blend-multiply transition-transform duration-[1000ms] ${hoveredComponent ? '-translate-x-[250px] translate-y-[150px]' : 'translate-x-0 translate-y-0'}`} alt='love gif' />
                    <img src='assets/gif/RedLove.gif' className={`{w-[96px] h-[97px] absolute top-[213px] left-[495px] rounded-[32px] opacity-100 mix-blend-multiply  transition-transform duration-[1000ms] ${hoveredComponent ? 'translate-x-[300px] translate-y-[150px]' : 'translate-x-0 translate-y-0'} `} alt='love gif' />
                    <img src='assets/gif/like.gif' className={`w-[96px] h-[97px] absolute top-[1px] left-[227px] rounded-[32px] opacity-100 mix-blend-multiply transition-transform duration-[1000ms] ${hoveredComponent ? 'translate-x-[10px] -translate-y-[150px]' : 'transform-x-0 translate-y-0'} `} alt='love gif' />
                    <img src='assets/gif/trophy.gif' className={`w-[96px] h-[97px] absolute top-[239px] left-[257px] rounded-[32px] opacity-100 mix-blend-multiply transition-transform duration-[1000ms] ${hoveredComponent ? 'translate-x-[10px] translate-y-[150px] ' : 'transform-x-0 translate-y-0'}`} alt='love gif' />
                    <img src='assets/images/image1.png' className={`w-[96px] h-[97px] absolute top-[1px] left-[359px] rounded-[32px] transition-transform duration-[1000ms]  ${hoveredComponent ? 'translate-x-[200px] -translate-y-[150px] animate-floatDown' : 'transform-x-0 translate-y-0'} `} alt='image1' />
                    <img src='assets/images/image2.png' className={`w-[96px] h-[97px] absolute top-[99px] left-[534px] rounded-[32px] transition-transform duration-[1000ms]  ${hoveredComponent ? 'translate-x-[250px] translate-y-[15px] animate-floatUp' : 'transform-x-0 translate-y-0'} `} alt='image2' />
                    <img src='assets/images/image4.png' className={`w-[96px] h-[97px] absolute top-[244px] left-[128px] rounded-[32px] transition-transform duration-[1000ms]   ${hoveredComponent ? '-translate-x-[150px] translate-y-[150px] animate-floatUp' : 'transform-x-0 translate-y-0'} `} alt='image4' />
                    <img src='assets/images/image5.png' className={`w-[96px] h-[97px] absolute top-[130px] left-[0px] rounded-[32px] transition-transform duration-[1000ms]  ${hoveredComponent ? '-translate-x-[250px] -translate-y-[15px] animate-floatDown' : 'transform-x-0 translate-y-0'} `} alt='image5' />
                    <div
                        onMouseEnter={() => isHovered(true)}
                        onMouseLeave={() => isHovered(false)}
                        className={`top-[6px] left-[106px] absolute ${hoveredComponent ? '-translate-x-[150px] -translate-y-[150px] animate-floatUp' : 'transform-x-0 translate-y-0'} transition-transform duration-[1000ms] `}
                    >
                        <TextHover hovered={hovered} />
                    </div>
                    <div
                        onMouseEnter={() => isVideoHovered(true)}
                        onMouseLeave={() => isVideoHovered(false)}
                        className={`top-[235px] left-[375px] absolute ${hoveredComponent ? 'translate-x-[150px] translate-y-[150px] animate-floatDown' : 'transform-x-0 translate-y-0'} transition-transform duration-[1000ms] `}
                    >
                        <VideoHover videoHovered={videoHovered} />
                    </div>
                </div>
                <TextComponent />
            </div>
        </div >
    )
}

export default TestimonialBottom
