import React from 'react'
import Container from '../layer/Container'
import Dot from '../layer/Dot'
import { roboto } from '../layout'
import like from '../../public/bnnar/like.png'
import Image from 'next/image'

const FreeTrial = () => {
  return (
    <div>
        <Container className={"relative freeTrial"}>
            <div className='w-[573px] py-[153px] mx-auto text-center'>
            <div className='flex items-center gap-x-2 justify-center'>
                <Dot/>
                <h1 className={`${roboto.className} font-medium leading-[170%] text-[12px] text-[#FF6231]`}>trendy application</h1>
            </div>
            <h1 className='font-Darker font-extrabold text-[80px] leading-[90%] text-white pb-10'>Get a free trial for <span className='text-[#FF6231]'>30</span> days</h1>
            <button className='text-white py-4 px-9 bg-gradient-to-r from-[#FF6231] to-[#FFA979] rounded-full uppercase'>get a free trial</button>
            </div>
            <div className='absolute right-[196px] top-[235px] rotate-[60deg] animate-ping'>
                <Image src={like} alt="like"/>
            </div>
        </Container>
    </div>
  )
}

export default FreeTrial