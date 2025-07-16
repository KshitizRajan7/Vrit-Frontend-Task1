import React from 'react'

const DynamicComponent = ({ color, direction, pointerPosition, description, showTitle, showAction = true, showClose = true, title, changeDescription, className, titleWidth, titleHeight }) => {
    const pointerPositions = ["First", "Middle", "Last"];
    const directions = ["top", "left", "right", " bottom"];
    const bgColor = `bg-${color.toLowerCase()}`;
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
        <div>
            {/* dynamic content */}
            <div className={`inline-flex  absolute top-[31px] left-[86px] w-fit h-fit`}>
                {/* left frame */}
                <div className='inline-flex flex-col pt-[16px] pb-[16px]'>
                    {/* {pointers} */}
                    <div className='w-[8px] h-[4px]'>
                        {/* vector */}
                        {direction == "Left" && (
                            <div className='w-[8px] h-[16px] absolute top-0'>
                                {
                                    pointerPositions.map((position) => {
                                        return (
                                            <div key={position}>
                                                {position == pointerPosition &&
                                                    (<div className='w-0 h-0 border-t-[8px] border-b-[8px] border-r-[8px] 
                        border-t-transparent border-b-transparent border-r-white'/>
                                                    )}
                                                {position != pointerPosition &&
                                                    (<div className='w-[8px] h-[16px]' />

                                                    )}
                                            </div>
                                        )
                                    }
                                    )}</div>
                        )}
                    </div>

                </div>
                {/* container */}
                <div className={`inline-flex flex-col ${bgColor}  shadow-lg rounded-[8px]`}>
                    {/* content  */}
                    <div className='inline-flex flex-col w-fit rounded-[8px] p-[16px] gap-[16px]'>
                        {/* text */}
                        <div className='inline-flex flex-col gap-[4px]'>
                            {/* Title  */}
                            <div className='inline-flex w-fit justify-between '>
                                {/* title */}
                                <p className={`font-outfit font-normal text-xs leading-[100%] tracking-normal   ${width} ${height}`}>
                                    {title || "N"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DynamicComponent
