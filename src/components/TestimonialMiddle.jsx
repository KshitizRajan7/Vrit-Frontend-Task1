'use client'
import React, { useState } from 'react'
import TestimonialBottom from './TestimonialBottom';

const TestimonialMiddle = () => {
    const [hoveredComponent, isHoveredComponent] = useState(false);
    return (
        <div onMouseEnter={() => { isHoveredComponent(true) }} onMouseLeave={() => { isHoveredComponent(false) }} className=" w-[1214px] h-[697px] flex justify-center items-center p-8 cursor-pointer">
            <TestimonialBottom hoveredComponent={hoveredComponent}/>
        </div>
    )
}

export default TestimonialMiddle;
