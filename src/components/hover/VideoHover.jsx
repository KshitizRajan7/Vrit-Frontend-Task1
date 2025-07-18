import React from 'react'
import DynamicComponent from '../dynamic/DynamicComponent'
import { image3Props, image3VideoProps } from '@/data/properties'

const VideoHover = ({ videoHovered }) => {
  return (
    <div className={`w-[97px] h-[98px] top-[235px] left-[375px] absolute transition-all duration-300 rounded-[32px] ${videoHovered
      ? 'rounded-2xl shadow-[0_0_25px_rgba(34,197,94,5)]'
      : ''}`}>
      {videoHovered && (<div className='inline-flex -top-[400px] -left-[50px] absolute'>
        <DynamicComponent {...image3VideoProps} />
      </div>)}
      <div className='inline-flex top-[41px] left-[85px] absolute '>
        <div className='animate-fadeCycle'>
          <DynamicComponent {...image3Props} />
        </div>
      </div>
      <img
        src='assets/images/image3.png'
        alt='image3'
        className='w-[97px] h-[97px] rounded-[32px] '
      />
    </div>
  )
}

export default VideoHover
