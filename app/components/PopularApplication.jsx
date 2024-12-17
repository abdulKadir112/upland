import React from 'react'
import Container from '../layer/Container'
import Image from 'next/image'
import app from '../../public/app.jpg'
import { LuDot } from "react-icons/lu";
import { roboto } from '../layout';
import { FaRegCircleCheck } from "react-icons/fa6";

const PopularApplication = () => {
  return (
    <div>
        <Container className={"flex justify-between items-center pb-[90px]"}>
            <div>
                <Image src={app} alt="app" />
            </div>
            <div className=' w-[457px]'>
                <div className='flex items-center text-[#FF6231]'>
                <LuDot />
                <LuDot />
                </div>
                <h1 className='heading'>The most popular application 2021</h1>
                <p className="font-Darker font-medium text-[28px] leading-[110%] text-[#888888] py-8">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum.</p>
                <div className='flex items-center gap-5'>
                <FaRegCircleCheck className='text-[#FF6231] text-2xl'/>
                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] w-[417px] pt-4`}>Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. </p>
                </div>
                <div className='flex items-center gap-5 py-5'>
                <FaRegCircleCheck className='text-[#FF6231] text-2xl'/>
                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] w-[417px] pt-4`}>Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.</p>
                </div>
                <div className='flex items-center gap-5'>
                <FaRegCircleCheck className='text-[#FF6231] text-2xl'/>
                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] w-[417px] pt-4`}>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default PopularApplication