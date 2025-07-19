
import React from 'react'
import DynamicComponent from '../dynamic/DynamicComponent'
import { image6Props, image6TextProps } from '@/data/properties'

const TextHover = ({ hovered }) => {
    return (
        <div className={`w-[97px] h-[97px] transition-all duration-300 rounded-[32px] ${hovered
            ? 'rounded-2xl shadow-[0_0_25px_rgba(34,197,94,5)]'
            : ''}`}>

            {hovered && (<div className={`inline-flex top-[55px] left-[20px] absolute animate-fadeInDown
                    `}  >
                <DynamicComponent {...image6TextProps} />
            </div>)}


            <div className={`inline-flex  absolute top-[31px] left-[86px] w-fit h-fit`}>
                <div className='animate-fadeCycle'>
                    <DynamicComponent {...image6Props} />
                </div>
            </div>


            <img src="/assets/images/image6.png"
                className="w-[97px] h-[97px]  rounded-[32px]"
                alt="Cropped Image"
            />
        </div>
    )
}

export default TextHover
