import React from 'react'
import DynamicComponent from '../dynamic/DynamicComponent'
import { image6Props, image6TextProps } from '@/data/properties'

const TextHover = () => {
    return (
        <div className='w-[97px] h-[97px] top-[6px] left-[106px] absolute'>
            <div className='animate-fadeCycle'>
            <DynamicComponent {...image6Props}/>
            </div>
            <img src="/assets/images/image6.png"
                className="w-[97px] h-[97px]  rounded-[32px]"
                alt="Cropped Image"
            />
        </div>
    )
}

export default TextHover
