'use client';
import React from 'react';

const TextHover = () => {
    return (
        <div className="relative w-[500px] h-[500px] group">
            {/* image */}
            <img
                src="/assets/images/image6.png"
                className="w-[97px] h-[97px] top-[6px] left-[106px] absolute opacity-100 rounded-[32px] "
                alt="Cropped Image"
            />
       
            {/* tooltip - shown on hover */}
            <div className="absolute top-[31px] left-[86px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='flex'>
                    {/* leftframe */}
                    <div className="flex flex-col w-[8px] h-[47px] pt-[16px] pb-[16px]">
                        <div className='w-[8px] h-[5px]'><div className='w-[8px] h-[16px] bg-white absolute top-[-5px]'></div></div>
                        <div className='w-[8px] h-[5px]'><div className='w-[8px] h-[16px] bg-white absolute top-[-5px]'></div></div>
                        <div className='w-[8px] h-[5px]'><div className='w-[8px] h-[16px] bg-white absolute top-[-5px]'></div></div>
                    </div>

                    {/* container */}
                    <div className="flex flex-col w-[142px] h-[47px]">
                        <div className="flex flex-row w-[309px] h-[8px]">
                            <div className="w-[8px] h-[103px] -rotate-90 bg-[#FFFFFF]">
                                <div className="absolute left-[43px] w-[8px] h-[16px] -rotate-90 bg-white" />
                            </div>
                            <div className="w-[8px] h-[103px] -rotate-90 bg-[#FFFFFF]">
                                <div className="absolute left-[43px] w-[8px] h-[16px] -rotate-90 bg-white" />
                            </div>
                            <div className="w-[8px] h-[103px] -rotate-90 bg-[#FFFFFF]">
                                <div className="absolute left-[43px] w-[8px] h-[16px] -rotate-90 bg-white" />
                            </div>
                        </div>

                        <div className="flex flex-col w-[142px] rounded-[8px] p-[16px] gap-[16px] bg-[#E8F6F1]">
                            <div className="flex flex-col w-[110px] h-[15px] gap-[4px]">
                                <div className="flex w-[110px] justify-between">
                                    {/* animated amazing text */}
                                    <p className="w-[110px] text-[12px] leading-[12px] font-normal text-[#2B2B2B] font-outfit animate-fadeCycle">
                                        Amazing ⭐⭐⭐⭐⭐
                                    </p>
                                    <div className="w-[16px] h-[16px]">
                                        <div className="w-[8px] h-[8px] border-[1.2px] border-[#6B7280] rounded-full flex items-center justify-center text-[6px] leading-none text-[#6B7280] font-medium">
                                            ×
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[285px] text-[12px] leading-[20px] font-normal text-right font-inter">
                                    Rajesh Dhakal<br />
                                    Digital Marketing Student
                                </div>
                            </div>

                            <div className="flex flex-col w-[285px]">
                                <button className="flex flex-row items-center px-[12px] py-[8px] gap-[6px] rounded-[8px] border border-[#E5E7EB] bg-white shadow-[0px_1px_2px_0px_#1018280A]">
                                    <div className="w-[16px] h-[16px]">
                                        <div className="w-[16px] h-[16px] rounded-[4px] bg-[#111827] opacity-20"></div>
                                    </div>
                                    <div className="w-[66px] h-[14px] bg-[#374151] text-white text-[12px] leading-[14px] font-medium text-center flex items-center justify-center font-inter">
                                        Button CTA
                                    </div>
                                    <div className="w-[16px] h-[16px]">
                                        <div className="w-[16px] h-[16px] rounded-[4px] bg-[#111827] opacity-20"></div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row w-[309px] h-[8px]">
                            <div className="w-[8px] h-[103px] rotate-90 opacity-100">
                                <div className="w-[8px] h-[16px] rotate-90 opacity-100 absolute left-[43px] bg-white"></div>
                            </div>
                            <div className="w-[8px] h-[103px] rotate-90 opacity-100">
                                <div className="w-[8px] h-[16px] rotate-90 opacity-100 absolute left-[43px] bg-white"></div>
                            </div>
                            <div className="w-[8px] h-[103px] rotate-90 opacity-100">
                                <div className="w-[8px] h-[16px] rotate-90 opacity-100 absolute left-[43px] bg-white"></div>
                            </div>
                        </div>
                    </div>

                    {/* rightframe */}
                    <div className="flex flex-col w-[8px] h-[160px] pt-[16px] pb-[16px] -rotate-180">
                        <div className="w-[8px] h-[42.666667px] -rotate-180 opacity-100">
                            <div className="w-[8px] h-[16px] -rotate-180 opacity-100 absolute top-[13px] bg-white"></div>
                        </div>
                        <div className="w-[8px] h-[42.666667px] -rotate-180 opacity-100">
                            <div className="w-[8px] h-[16px] -rotate-180 opacity-100 absolute top-[13px] bg-white"></div>
                        </div>
                        <div className="w-[8px] h-[42.666667px] -rotate-180 opacity-100">
                            <div className="w-[8px] h-[16px] -rotate-180 opacity-100 absolute top-[13px] bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextHover;
