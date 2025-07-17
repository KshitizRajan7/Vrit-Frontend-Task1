import React from 'react'
import DynamicComponent from '../dynamic/DynamicComponent'
import { image3Props } from '@/data/properties'

const VideoHover = () => {
  return (
    <div className='w-[97px] h-[98px] top-[235px] left-[375px] absolute'>
      <div className='inline-flex top-[41px] left-[85px] absolute '>
      <div className='animate-fadeCycle'>
      <DynamicComponent {...image3Props}/>
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
