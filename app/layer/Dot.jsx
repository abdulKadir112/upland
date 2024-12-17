import React from 'react'
import { BsDot } from "react-icons/bs"

const Dot = () => {
    return (
        <div className='relative flex justify-start text-[#FF6231] text-3xl'>
            <BsDot className='' />
            <BsDot className='absolute top-1/2 left-3 -translate-y-1/2' />
        </div>
    )
}

export default Dot