'use client'
import React, { useState } from 'react'
import TextComponent from './TextComponent'
import TextHover from './hover/TextHover'
import VideoHover from './hover/VideoHover'

const TestimonialBottom = () => {
    const [hovered, isHovered] = useState(true);
    const [videoHovered, isVideoHovered] = useState(true);
    const [animate, isAnimate] = useState(false);
    return (
        <div>
            <div onMouseEnter={() => isAnimate(true)} onMouseLeave={() => isAnimate(false)} className={`transition-all duration-500 ease-in-out ${animate ? 'animate-bounce-slow scale-150' : ''}`}>
                <div className="w-[630px] h-[341px] opacity-100 rotate-0 rounded-xl p-6  flex justify-center items-center border">
                    <img src='assets/gif/love.gif' className='w-[96px] h-[97px] absolute top-[213px] left-[32px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
                    <img src='assets/gif/RedLove.gif' className='w-[96px] h-[97px] absolute top-[213px] left-[495px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
                    <img src='assets/gif/like.gif' className='w-[96px] h-[97px] absolute top-[1px] left-[227px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
                    <img src='assets/gif/trophy.gif' className='w-[96px] h-[97px] absolute top-[239px] left-[257px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
                    <img src='assets/images/image1.png' className='w-[96px] h-[97px] absolute top-[1px] left-[359px] rounded-[32px]' alt='image1' />
                    <img src='assets/images/image2.png' className='w-[96px] h-[97px] absolute top-[99px] left-[534px] rounded-[32px]' alt='image2' />
                    <img src='assets/images/image4.png' className='w-[96px] h-[97px] absolute top-[244px] left-[128px] rounded-[32px] ' alt='image4' />
                    <img src='assets/images/image5.png' className='w-[96px] h-[97px] absolute top-[130px] left-[0px] rounded-[32px] ' alt='image5' />
                    <div
                        onMouseEnter={() => isHovered(true)}
                        onMouseLeave={() => isHovered(false)}

                    >
                        <TextHover hovered={hovered} />
                    </div>
                    <div
                        onMouseEnter={() => isVideoHovered(true)}
                        onMouseLeave={() => isVideoHovered(false)}
                    >
                        <VideoHover videoHovered={videoHovered} />
                    </div>
                    <TextComponent />
                </div>

            </div>
        </div>
    )
}

export default TestimonialBottom
