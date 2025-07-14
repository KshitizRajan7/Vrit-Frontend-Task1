import React from 'react'

const TextHover = () => {
    return (
        <div className='w-[97px] h-[97px] top-[6px] left-[106px] absolute '>
            {/* ToolTip */}
            {/*
            <div
                className="absolute bg-white rounded-xl p-6 opacity-0 
            [width:30.59rem] [height:16rem] 
            [top:71.5px] [left:37.99px] 
            [box-shadow:0px_8px_24px_-3px_rgba(16,24,40,0.08)]"
            >
                ...
            </div>
            */}

            {/* testimonial */}
            <div className='w-[97px] h-[97px]'>
                {/* tooltip */}
                <div className='flex top-[35px] left-[75px] absolute'>
                    {/* leftframe */}
                    {/*
                    <div className="flex flex-col w-[8px] h-[47px] pt-[16px] pb-[16px]">
                        ...
                    </div>
                    */}

                    {/* containter */}
                    <div className="flex flex-col w-[142px] h-[47px]">
                        {/* topframe */}
                        {/*
                        <div className="flex flex-row w-[309px] h-[8px]">...</div>
                        */}

                        {/* content */}
                        <div className="flex flex-col w-[142px] rounded-[8px] p-[16px] gap-[16px]">
                            {/* text */}
                            <div className="flex flex-col w-[110px] h-[15px] gap-[4px]">
                                {/* Title */}
                                <div className="flex w-[110px] justify-between">
                                    {/* title */}
                                    <div className="relative w-max">
                                        <p className="w-[161px] text-[12px] leading-[12px] font-normal text-[#2B2B2B] bg-white shadow-sm text-center p-3 rounded-xl font-outfit animate-fadeCycle ">
                                            Amazing ⭐⭐⭐⭐⭐
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 
                  border-t-[6px] border-b-[6px] border-r-[6px]
                  border-t-transparent border-b-transparent border-r-white"/>
                                        </p>
                                    </div>


                                    {/*  Icon */}
                                    {/*
                                    <div className="w-[16px] h-[16px]">
                                        <div className="w-[8px] h-[8px] border-[1.2px] border-[#6B7280] rounded-full flex items-center justify-center text-[6px] leading-none text-[#6B7280] font-medium">
                                            ×
                                        </div>
                                    </div>
                                    */}
                                </div>
                                {/* subtext */}
                                {/*
                                <div className="w-[285px] text-[12px] leading-[20px] font-normal text-right font-inter">
                                    Rajesh Dhakal<br />
                                    Digital Marketing Student
                                </div>
                                */}
                            </div>
                            {/* action */}
                            {/*
                            <div className="flex flex-col w-[285px]">
                                ...
                            </div>
                            */}
                        </div>
                        {/* Bottom Frame */}
                        {/*
                        <div className="flex flex-row w-[309px] h-[8px]">
                            ...
                        </div>
                        */}
                    </div>
                    {/* rightframe */}
                    {/*
                    <div className="flex flex-col w-[8px] h-[160px] pt-[16px] pb-[16px] -rotate-180">
                        ...
                    </div>
                    */}
                </div>

                {/* image */}
                <img
                    src="/assets/images/image6.png"
                    className="w-[96px] h-[97px] rounded-[32px] "
                    alt="Cropped Image"
                />
            </div>
        </div>
    )
}

export default TextHover
