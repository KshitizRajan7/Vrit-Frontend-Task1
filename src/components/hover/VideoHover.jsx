import React from 'react'

const VideoHover = () => {
  return (
    <div className='w-[97px] h-[98px] top-[235px] left-[375px] absolute'>
      <div className='absolute top-[31px] left-[86px] z-[10]'>
        <div className="relative w-max">
          <p className="w-[161px] text-[12px] leading-[12px] font-normal text-[#2B2B2B] bg-white shadow-sm text-center p-3 rounded-xl font-outfit animate-fadeCycle ">
            ⭐⭐⭐⭐⭐
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 
              border-t-[6px] border-b-[6px] border-r-[6px]
              border-t-transparent border-b-transparent border-r-white" />
          </p>
        </div>
      </div>
      <img
        src='assets/images/image3.png'
        alt='image3'
        className='w-[97px] h-[97px] top-1 left-1 absolute rounded-[32px] z-[0]'
      />
    </div>
  )
}

export default VideoHover
