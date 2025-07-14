import React from 'react'
import TextComponent from './TextComponent'
import TextHover from './hover/TextHover'
import TextHoverGpt from './hover/TextHoverGpt'
import VideoHover from './hover/VideoHover'

const TestimonialBottom = () => {
    return (
        <div className="w-[630px] h-[341px] opacity-100 rotate-0 rounded-xl p-6  flex justify-center items-center">
            <img src='assets/gif/love.gif' className='w-[96px] h-[97px] absolute top-[213px] left-[32px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
            <img src='assets/gif/RedLove.gif' className='w-[96px] h-[97px] absolute top-[213px] left-[495px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
            <img src='assets/gif/like.gif' className='w-[96px] h-[97px] absolute top-[1px] left-[227px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
            <img src='assets/gif/trophy.gif' className='w-[96px] h-[97px] absolute top-[239px] left-[257px] rounded-[32px] opacity-100 mix-blend-multiply' alt='love gif' />
            <img src='assets/images/image1.png' className='w-[96px] h-[97px] absolute top-[1px] left-[359px] rounded-[32px]' alt='image1' />
            <img src='assets/images/image2.png' className='w-[96px] h-[97px] absolute top-[99px] left-[534px] rounded-[32px]' alt='image2' />
            <img src='assets/images/image3.png' className='w-[96px] h-[97px] absolute top-[239px] left-[375px] rounded-[32px] ' alt='image3' />
            <img src='assets/images/image4.png' className='w-[96px] h-[97px] absolute top-[244px] left-[128px] rounded-[32px] ' alt='image4' />
            <img src='assets/images/image5.png' className='w-[96px] h-[97px] absolute top-[130px] left-[0px] rounded-[32px] ' alt='image5' />
            {/* <img src='assets/images/image6.png' className='w-[96px] h-[97px] absolute top-[6px] left-[106px] rounded-[32px] ' alt='image6' /> */}
            {/* <TextHover/> */}
            <TextHoverGpt/>
            <VideoHover/>
            <TextComponent />
        </div>
    )
}

export default TestimonialBottom
