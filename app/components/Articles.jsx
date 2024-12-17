import React from 'react'
import Container from '../layer/Container'
import { roboto } from '../layout'
import Dot from '../layer/Dot'
import { LuDot, LuShare2 } from "react-icons/lu";

const Articles = () => {
    return (
        <div>
            <Container className={"max-w-[1500px] flex justify-between"}>
                <div>
                    <div className='w-[457px]'>
                        <Dot />
                        <h1 className='heading '>read the latest news and articles</h1>
                        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-8 pb-12`}>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                    </div>
                    <button className={`${roboto.className} font-semibold text-[12px] leading-[170%] text-[#FF6231] uppercase underline underline-offset-4`}>read more</button>
                </div>
                <div className='flex gap-x-[30px]'>
                    <div className='w-[480px] p-10'>
                        <p className={`${roboto.className} font-medium text-[12px] leading-[170%] text-[#FF6231] uppercase`}>Dec 10, 2020</p>
                        <h2 className='font-Darker font-semibold text-[28px] leading-[170%] text-black'>Launch of a new convenient feature this Saturday. Trend 2020</h2>
                        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-6 pb-6`}>Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <div className='flex items-center gap-x-2.5'>
                                    <div className='w-5 h-5 bg-[#CEA6DC] rounded-full'></div>
                                    <h2 className={`${roboto.className} font-medium text-base leading-[170%] text-[#000000]`}>Leslie Alexander</h2>
                                </div>
                                <div className=''>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-x-2.5'>
                                        <LuShare2 className='text-[#888888]' />
                                        <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#888888]`}>Share</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[480px] p-10'>
                        <p className={`${roboto.className} font-medium text-[12px] leading-[170%] text-[#FF6231] uppercase`}>Dec 10, 2020</p>
                        <h2 className='font-Darker font-semibold text-[28px] leading-[170%] text-black'>Launch of a new convenient feature this Saturday. Trend 2020</h2>
                        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-6 pb-6`}>Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <div className='flex items-center gap-x-2.5'>
                                    <div className='w-5 h-5 bg-[#CEA6DC] rounded-full'></div>
                                    <h2 className={`${roboto.className} font-medium text-base leading-[170%] text-[#000000]`}>Leslie Alexander</h2>
                                </div>
                                <div className=''>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-x-2.5'>
                                        <LuShare2 className='text-[#888888]' />
                                        <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#888888]`}>Share</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Articles