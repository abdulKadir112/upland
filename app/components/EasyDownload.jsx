import React from 'react'
import Container from '../layer/Container'
import { roboto } from '../layout'
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const EasyDownload = () => {
    return (
        <div>
            <Container className={"flex justify-between max-w-[1136px] pb-40 "}>
                <div className='w-[457px]'>
                    <h1 className='heading'>easy download and ready to use</h1>
                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-[30px]`}>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>
                    <div className='flex gap-x-5 pt-[50px]'>
                        <button className={` text-white flex items-center gap-x-2.5 py-4 px-9  bg-gradient-to-r from-[#FF6231] to-[#FFA979]  rounded-full`}>
                            <FaGooglePlay />
                            <div className='flex flex-col items-start'>
                                <p className={`${roboto.className} font-normal text-[10px]`}>Download on the</p>
                                <h4 className={`${roboto.className} font-medium text-sm uppercase`}>Google Play</h4>
                            </div>
                        </button>
                        <button className={` text-[#FF6231] flex items-center gap-x-2.5 py-4 px-9  border-2 border-[#FF6231]  rounded-full`}>
                            <FaApple />
                            <div className='flex flex-col items-start'>
                                <p className={`${roboto.className} font-normal text-[10px]`}>Download on the</p>
                                <h4 className={`${roboto.className} font-medium text-sm uppercase`}>app store</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='flex gap-[52px]'>
                        <div>
                            <p className={`${roboto.className} font-medium text-[12px] leading-[170%] text-[#FF6231] uppercase`}>basic</p>
                            <div className='border-b-2 border-dashed border-[#5437B2]'>
                                <p className={`${roboto.className} relative font-bold text-[32px] text-black leading-[170%]`}>$12 <span className='text-base absolute top-0 translate-y-1/2 '>.99</span></p>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pb-3`}>/per month</p>
                            </div>
                            <div className='pt-[30px]'>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Proident excepteur</span></p>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Veniam occaecat id ea</span></p>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-bold text-base leading-[170%] text-[#888888]`}>Labore do nulla ipsum</span></p>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Culpa non ex tempor qui</span></p>
                            </div>
                        </div>
                        <div>
                            <p className={`${roboto.className} font-medium text-[12px] leading-[170%] text-[#FF6231] uppercase`}>popular</p>
                            <div className='border-b-2 border-dashed border-[#5437B2]'>
                                <p className={`${roboto.className} relative font-bold text-[32px] text-black leading-[170%]`}>$99<span className='text-base absolute top-0 translate-y-1/2 '>.99</span></p>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pb-3`}>/per year</p>
                            </div>
                            <div className='pt-[30px]'>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-bold text-base leading-[170%] text-[#888888]`}>Velit occaecat duis</span></p>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Culpa non ex tempor qui</span></p>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}> Excepteur cupidatat consectetur</span></p>
                                <p className=' flex items-center gap-x-2.5'><BsDot className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Proident excepteur</span></p>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default EasyDownload