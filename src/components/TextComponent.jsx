import React from 'react'
import FrameComponent from './FrameComponent'

const TextComponent = () => {
    return (
        <div className=" gap-[20px] flex flex-col justify-between items-center">
            <p className="w-[400px] h-[30px] text-[24px] leading-[100%] font-normal font-outfit">
                Hear How They Level Up Their Game!
            </p>
            <FrameComponent />
            <button className="flex items-center justify-center gap-[8px]">
                <p
                    className="w-[180px] h-[23px] text-[18px] leading-[100%] font-semibold text-center font-outfit"
                >
                    View all Testimonials
                </p>
                <div className="w-[20px] h-[20px] ">
                    <div className="w-[14px] h-[11.67px]">
                        <img
                            src="/assets/arrow.svg"
                            alt="arrow icon"
                        />
                    </div>
                </div>
            </button>

        </div>
    )
}

export default TextComponent
