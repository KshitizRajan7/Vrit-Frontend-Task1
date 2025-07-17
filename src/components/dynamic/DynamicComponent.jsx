import React from 'react'

const DynamicComponent = ({ text, color, direction, pointerPosition, description, showTitle, showAction, showClose = true, title, changeDescription, className, titleWidth, titleHeight }) => {
    const pointerPositions = ["First", "Middle", "Last"];
    const directions = ["top", "left", "right", " bottom"];
    const bgColor = `bg-${color.toLowerCase()}`;
    const textSize = `text-[${text}px]`;
    const width = `w-[${titleWidth}px]`;
    const height = `h-[${titleHeight}px]`;


    // // this will provide the pointer according to the direction and pointerPosition

    const providePointer = (dir, pos) => {
        // storing the condition if the positionPosition and direction is active as true or false
        const isActive = pointerPosition === pos && direction === dir;

        // if not active return this and function stops
        if (!isActive) return <div className='w-[8px] h-[5px]' />;

        //this will be the pointer 
        let pointer;

        if (dir == "right") {
            pointer = (<div className='w-0 h-0 border-t-[8px] border-b-[8px] border-l-[8px] 
                        border-t-transparent border-b-transparent border-l-white'/>)
        } else if (dir = "left") {
            pointer = (<div className="w-0 h-0 border-t-[8px] border-b-[8px] border-r-[8px] 
                        border-t-transparent border-b-transparent border-r-white" />)
        } else if (dir === "bottom") {
            pointer = (
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] 
                        border-l-transparent border-r-transparent border-b-white" />
            );
        } else if (dir === "top") {
            pointer = (
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] 
                        border-l-transparent border-r-transparent border-t-white" />
            );
        }

        return <div className='relative'>{pointer}</div>

    }
    return (
        <div className='inline-flex'>
            {/* dynamic content */}
            <div className='inline-flex flex-col justify-start gap-y-2' >
                {pointerPositions.map((position) => {
                    const isVisible = position === pointerPosition;
                    return (
                        <div key={position} className='inline-flex items-center justify-start'>
                            {isVisible ? (
                                <div className='w-0 h-0 border-t-[8px] border-b-[8px] border-r-[8px] border-t-transparent border-b-transparent border-r-white'></div>
                            ) : (
                                <div className='w-[8px] h-[0px]' />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* container */}
            <div className={`inline-flex flex-col ${bgColor} shadow-lg rounded-[8px]`}>
                {/* content  */}
                <div className='inline-flex flex-col w-fit rounded-[8px] p-[10px] gap-[1px]'>
                    {/* text */}
                    <div className='inline-flex flex-col gap-[4px]  items-center justify-center'>
                        {/* Title  */}
                        <div className='inline-flex w-fit'>
                            {/* title */}
                            <p
                                className="font-outfit font-normal leading-[100%] tracking-normal"
                                style={{
                                    fontSize: `${text}px`,
                                    width: `${titleWidth}px`,
                                    height: `${titleHeight}px`,
                                }}
                            >
                                {title || "N"}
                            </p>
                            {/* Icon */}
                            {showClose && (<div className='inline-flex w-[1.51px] h-[1.51px] border-[0.11px] border-[#6B7280] relative'>
                                <p className='text-[2px] w-[0.75px] h-[0.75px] top-[-1px] left-[0px] absolute '>x</p>
                            </div>)}

                        </div>
                        {/* subtext */}
                        {changeDescription && (<p
                            className="text-right font-outfit font-normal leading-[100%] tracking-normal whitespace-pre-line "
                            style={{
                                fontSize: `${text}px`,
                                width: `${titleWidth}px`,
                            }}
                        >
                            {changeDescription || description}
                        </p>)}
                    </div>
                    {/* Action */}
                    {showAction && (<div className='inline-flex flex-col items-end '>
                        {/* button */}
                        <button className='inline-flex w-[9px]  rounded-[0.75px] border-[0.09px]pt-[0.75px] pr-[1.13px] pb-[0.75px] pl-[1.13px] gap-[0.56px] shadow-lg' >
                            {/* icon left */}
                            <div className='inline-flex'>
                                <div className='w[1.51px] h-[1.51px] rounded-[0.38px] opacity-[20%]' />
                            </div>
                            {/* label */}
                            <p class="font-medium w-[7px] h-[2px] text-[1.2px] leading-[100%] text-center align-middle font-inter ">
                                ButtonCTA
                            </p>

                            {/* icon right */}
                            <div className='inline-flex'>
                                <div className='w[1.51px] h-[1.51px] rounded-[0.38px] opacity-[20%]' />
                            </div>
                        </button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default DynamicComponent
