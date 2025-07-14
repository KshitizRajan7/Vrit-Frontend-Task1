import React from 'react'

const TextHover = () => {
    return (
        <div>
            {/* ToolTip */}
            <div
                className="absolute bg-white rounded-xl p-6 opacity-0 
            [width:30.59rem] [height:16rem] 
            [top:71.5px] [left:37.99px] 
            [box-shadow:0px_8px_24px_-3px_rgba(16,24,40,0.08)]"
            >
                {/* Left Frame */}
                <div className="flex flex-col justify-between h-[15.06px] pt-[1.51px] pb-[1.51px]">
                    {/* pointers */}
                    <div className='w-[0.75px] h-[4.02px]'>
                        <div className='absolute w-[0.75px] h-[1.51px] top-[1.22px] bg-white'>
                        </div>
                    </div>
                    <div className='w-[0.75px] h-[4.02px]'>
                        <div className='absolute w-[0.75px] h-[1.51px] top-[1.22px] bg-white'>
                        </div>
                    </div>
                    <div className='w-[0.75px] h-[4.02px]'>
                        <div className='absolute w-[0.75px] h-[1.51px] top-[1.22px] bg-white'>
                        </div>
                    </div>
                    {/* Pointer - middle top */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 bg-white rotate-45 shadow-md"></div>
                    </div>
                </div>
                {/* containter */}
                <div className='flex flex-col w-[30.59px]'>
                    {/* top frame */}
                    <div className='flex-1 flex flex-col'>
                        {/* pointers */}
                        <div className='w-[0.75px] h-[10.2px] rotate-[-90deg]'>
                        </div>
                        <div className='w-[0.75px] h-[10.2px] rotate-[-90deg]'>
                        </div>
                        <div className='w-[0.75px] h-[10.2px] rotate-[-90deg]'>
                        </div>
                    </div>
                    {/* content */}
                    <div className='flex flex-col flex-1 rounded-[0.75px] p-[1.51px] gap-[1.51px]'>
                        {/* text */}
                        <div className='flex flex-col flex-1 gap-[0.38px]'>
                            {/* title */}
                            <div className='flex justify-between'>
                                <p className='w-[27.58px] h-[8px] font-outfit font-normal text-[12px] leading-[100%] tracking-[0%]'>
                                    I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I have recommended the same course to my data-enthusiast friends.</p>
                            </div>
                            {/* icon */}
                            <div className='w-[1.51px] h-[1.51px]'>
                                <p className='w-[0.75px] h-[0.75px] top-[0.38px] left-[0.38px] [border-width:0.11px] text-[#6B7280]'>X</p>
                            </div>
                            {/* subtext */}
                            <p className='w-[27.58px] h-[2px] font-[Inter] font-normal text-[1.13px] leading-[20px] tracking-[0] text-right'>
                                Rajesh Dhakal
                                Digital Marketing Student
                            </p>
                        </div>
                        {/* action */}
                        <div className='flex flex-col w-[27.58px] '>
                            {/* button */}
                            <button className='flex rounded-[0.75px] [border-width:0.09px] pt-[0.75px] pr-[1.13px] pb-[0.75px] pl-[1.13px] gap-[0.56px] shadow-sm'>
                                {/* icon left*/}
                                <div className='w-[1.51px] h-[1.51px]'>
                                    <p className='w-[7px] h-[2px] font-mediumfont-[Inter] font-medium text-[12px] leading-[14px] tracking-[0] text-center align-middle'>
                                        Button CTA
                                    </p>
                                </div>
                                {/* icon-right */}
                                <div className='w-[1.51px] h-[1.51px]'>
                                    {/* square */}
                                    <div className="w-[1.51px] h-[1.51px] bg-[#111827] rounded-[0.38px] opacity-20"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* buttom frame  */}
                    <div className='flex w-[29.08px]'>
                        {/* pointers  */}
                        <div className='w-[0.75px] h-[9.69px] rotate-90'>
                            {/* vector  */}
                            <div className='w-[0.75px] h-[1.51px] left-[4.05px] rotate-90 absolute bg-white'>
                            </div>
                        </div>
                        <div className='w-[0.75px] h-[9.69px] rotate-90'>
                            {/* vector  */}
                            <div className='w-[0.75px] h-[1.51px] left-[4.05px] rotate-90 absolute bg-white'>
                            </div>
                        </div>
                        <div className='w-[0.75px] h-[9.69px] rotate-90'>
                            {/* vector  */}
                            <div className='w-[0.75px] h-[1.51px] left-[4.05px] rotate-90 absolute bg-white'>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right frame  */}
                <div className=' flex flex-col h-[15.06px] pt-[1.51px] pb-[1.51px] -rotate-180'>
                    {/* pointers  */}
                    <div className='w-[0.75px] h-[4.02px] -rotate-180'>
                        {/* vector  */}
                        <div className='w-[0.75px] h-[1.51px] top-[1.22px] -rotate-180 absolute bg-white'>
                        </div>
                        <div className='w-[0.75px] h-[1.51px] top-[1.22px] -rotate-180 absolute bg-white'>
                        </div>
                        <div className='w-[0.75px] h-[1.51px] top-[1.22px] -rotate-180 absolute bg-white'>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial  */}
            <div className='w-[97px] h-[97px]'>
                {/* tooltip  */}
                <div className='flex top-[31px] left-[86px] absolute'>
                    {/* leftframe  */}
                    <div className="flex flex-col w-[8px] h-[47px] pt-[16px] pb-[16px]">
                        {/* pointers  */}
                        <div className='w-[8px] h-[5px]'>
                            {/* vector */}
                            <div className='w-[8px] h-[16px] bg-white absolute top-[-5px]'></div>
                        </div>
                        <div className='w-[8px] h-[5px]'>
                            {/* vector */}
                            <div className='w-[8px] h-[16px] bg-white absolute top-[-5px]'></div>
                        </div>
                        <div className='w-[8px] h-[5px]'>
                            {/* vector */}
                            <div className='w-[8px] h-[16px] bg-white absolute top-[-5px]'></div>
                        </div>
                    </div>
                    {/* containter  */}
                    <div className="flex flex-col w-[142px] h-[47px]">
                        {/* topframe  */}
                        <div className="flex flex-row w-[309px] h-[8px]">
                            {/* pointers  */}
                            <div className="w-[8px] h-[103px] -rotate-90 bg-[#FFFFFF]">
                                {/*  vector */}
                                <div className="absolute left-[43px] w-[8px] h-[16px] -rotate-90 bg-white">
                                </div>
                            </div>
                            <div className="w-[8px] h-[103px] -rotate-90 bg-[#FFFFFF]">
                                {/*  vector */}
                                <div className="absolute left-[43px] w-[8px] h-[16px] -rotate-90 bg-white">
                                </div>
                            </div>
                            <div className="w-[8px] h-[103px] -rotate-90 bg-[#FFFFFF]">
                                {/*  vector */}
                                <div className="absolute left-[43px] w-[8px] h-[16px] -rotate-90 bg-white">
                                </div>
                            </div>
                        </div>
                        {/* content  */}
                        <div className="flex flex-col w-[142px] rounded-[8px] p-[16px] gap-[16px] bg-[#E8F6F1]">
                            {/* text  */}
                            <div className="flex flex-col w-[110px] h-[15px] gap-[4px]">
                                {/* Title */}
                                <div className="flex w-[110px] justify-between">
                                    {/* title*/}
                                    <p className="w-[110px] text-[12px] leading-[12px] font-normal text-[#2B2B2B] font-outfit">
                                        Amazing ⭐⭐⭐⭐⭐
                                    </p>
                                    {/*  Icon */}
                                    <div className="w-[16px] h-[16px]">
                                        {/* icon */}
                                        <div className="w-[8px] h-[8px] border-[1.2px] border-[#6B7280] rounded-full flex items-center justify-center text-[6px] leading-none text-[#6B7280] font-medium">
                                            ×
                                        </div>
                                    </div>

                                </div>
                                {/* subtext */}
                                <div className="w-[285px] text-[12px] leading-[20px] font-normal text-right font-inter">
                                    Rajesh Dhakal<br />
                                    Digital Marketing Student
                                </div>

                            </div>
                            {/* action */}
                            <div className="flex flex-col w-[285px]">
                                {/* button */}
                                <button className="flex flex-row items-center px-[12px] py-[8px] gap-[6px] rounded-[8px] border border-[#E5E7EB] bg-white shadow-[0px_1px_2px_0px_#1018280A]">
                                    {/* Icon left */}
                                    <div className="w-[16px] h-[16px]">
                                        {/* square */}
                                        <div className="w-[16px] h-[16px] rounded-[4px] bg-[#111827] opacity-20">
                                        </div>

                                    </div>
                                    {/* Label */}
                                    <div className="w-[66px] h-[14px] bg-[#374151] text-white text-[12px] leading-[14px] font-medium text-center flex items-center justify-center font-inter">
                                        Button CTA
                                    </div>
                                    {/* Icon Right  */}
                                    <div className="w-[16px] h-[16px]">
                                        {/* Square */}
                                        <div className="w-[16px] h-[16px] rounded-[4px] bg-[#111827] opacity-20">
                                        </div>

                                    </div>


                                </button>

                            </div>

                        </div>
                        {/* Bottom Frame  */}
                        <div className="flex flex-row w-[309px] h-[8px]">
                            {/* pointers */}
                            <div className="w-[8px] h-[103px] rotate-90 opacity-100">
                                {/* vector  */}
                                <div className="w-[8px] h-[16px] rotate-90 opacity-100 absolute left-[43px] bg-white"></div>
                            </div>
                            <div className="w-[8px] h-[103px] rotate-90 opacity-100">
                                {/* vector  */}
                                <div className="w-[8px] h-[16px] rotate-90 opacity-100 absolute left-[43px] bg-white"></div>
                            </div>
                            <div className="w-[8px] h-[103px] rotate-90 opacity-100">
                                {/* vector  */}
                                <div className="w-[8px] h-[16px] rotate-90 opacity-100 absolute left-[43px] bg-white"></div>
                            </div>
                        </div>

                    </div>
                    {/* rightframe  */}
                    <div className="flex flex-col w-[8px] h-[160px] pt-[16px] pb-[16px] -rotate-180">
                        {/* pointers */}
                        <div className="w-[8px] h-[42.666667px] -rotate-180 opacity-100">
                            {/* vector  */}
                            <div className="w-[8px] h-[16px] -rotate-180 opacity-100 absolute top-[13px] bg-white"></div>
                        </div>
                        <div className="w-[8px] h-[42.666667px] -rotate-180 opacity-100">
                            {/* vector  */}
                            <div className="w-[8px] h-[16px] -rotate-180 opacity-100 absolute top-[13px] bg-white"></div>
                        </div>
                        <div className="w-[8px] h-[42.666667px] -rotate-180 opacity-100">
                            {/* vector  */}
                            <div className="w-[8px] h-[16px] -rotate-180 opacity-100 absolute top-[13px] bg-white"></div>
                        </div>

                    </div>

                </div>
                {/* image */}
                <img src="/assets/images/image6.jpg"
                    className="w-[500px] h-[500px] opacity-100 rounded-[32px]"
                    alt="Cropped Image"
                />
            </div>
        </div>
    )
}

export default TextHover
