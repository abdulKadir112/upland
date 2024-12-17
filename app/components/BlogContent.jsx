import React from 'react'
import Container from '../layer/Container'
import { roboto } from '../layout'
import { LuDot, LuShare2 } from "react-icons/lu";
import { IoMdSearch, } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import Calendar from './Calendar';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";



const BlogContent = () => {
    return (
        <div>

            <Container className={"flex justify-between border-b-2 border-dashed border-[#5437b246]"}>
                <div className='max-w-[828px]'>
                    <div>
                        <div className='relative w-[828px] h-[400px] bg-[#E6EBFC] rounded-[20px]'>
                            <div className='p-4 bg-[#FF6231] rounded-t-[10px] absolute left-10 bottom-0 flex flex-col items-center'>
                                <p className={`${roboto.className} font-medium text-sm text-white uppercase`}>Dec</p>
                                <h1 className={`${roboto.className} font-bold text-[28px] text-white`}>10</h1>
                            </div>
                        </div>
                        <div className='pt-12 px-10'>
                            <h1 className='font-Darker font-semibold text-[36px] text-[#000000] capitalize'>a selection of the best apps for 2020</h1>
                            <div className='max-w-[828px] '>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between pt-[30px] px-10'>
                            <div className='flex items-center gap-x-3'>
                                <div className='flex items-center gap-x-2.5'>
                                    <div className='w-5 h-5 bg-[#CEA6DC] rounded-full'></div>
                                    <h2 className={`${roboto.className} font-medium text-base leading-[170%] text-[#000000]`}>Leslie Alexander</h2>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Mobile</p>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-x-2.5'>
                                        <LuShare2 className='text-[#888888]' />
                                        <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#888888]`}>Share</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <LiaLongArrowAltRightSolid className='text-[#CCCCCC] text-5xl' />
                            </div>
                        </div>
                    </div>
                    <div className='py-[50px]'>
                        <div className='relative w-[828px] h-[400px] bg-[#E6EBFC] rounded-[20px]'>
                            <div className='p-4 bg-[#FF6231] rounded-t-[10px] absolute left-10 bottom-0 flex flex-col items-center'>
                                <p className={`${roboto.className} font-medium text-sm text-white uppercase`}>Dec</p>
                                <h1 className={`${roboto.className} font-bold text-[28px] text-white`}>06</h1>
                            </div>
                        </div>
                        <div className='pt-12 px-10'>
                            <h1 className='font-Darker font-semibold text-[36px] text-[#000000] capitalize'>How to start developing an application</h1>
                            <div className='max-w-[828px] '>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between pt-[30px] px-10'>
                            <div className='flex items-center gap-x-3'>
                                <div className='flex items-center gap-x-2.5'>
                                    <div className='w-5 h-5 bg-[#CEA6DC] rounded-full'></div>
                                    <h2 className={`${roboto.className} font-medium text-base leading-[170%] text-[#000000]`}>Ralph Edwards</h2>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Mobile</p>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-x-2.5'>
                                        <LuShare2 className='text-[#888888]' />
                                        <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#888888]`}>Share</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <LiaLongArrowAltRightSolid className='text-[#CCCCCC] text-5xl' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative w-[828px] h-[400px] bg-[#E6EBFC] rounded-[20px]'>
                            <div className='p-4 bg-[#FF6231] rounded-t-[10px] absolute left-10 bottom-0 flex flex-col items-center'>
                                <p className={`${roboto.className} font-medium text-sm text-white uppercase`}>Dec</p>
                                <h1 className={`${roboto.className} font-bold text-[28px] text-white`}>02</h1>
                            </div>
                        </div>
                        <div className='pt-12 px-10'>
                            <h1 className='font-Darker font-semibold text-[36px] text-[#000000] capitalize'>the most important points in application testing</h1>
                            <div className='max-w-[828px] '>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between pt-[30px] px-10'>
                            <div className='flex items-center gap-x-3'>
                                <div className='flex items-center gap-x-2.5'>
                                    <div className='w-5 h-5 bg-[#CEA6DC] rounded-full'></div>
                                    <h2 className={`${roboto.className} font-medium text-base leading-[170%] text-[#000000]`}>Savannah Nguyen</h2>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Mobile</p>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-x-2.5'>
                                        <LuShare2 className='text-[#888888]' />
                                        <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#888888]`}>Share</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <LiaLongArrowAltRightSolid className='text-[#CCCCCC] text-5xl' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[262px]'>
                    <div className='relative'>
                        <input className={`${roboto.className}  font-normal text-base leading-[170%] text-black w-[100%] h-[60px] border border-[#B3B1B7] outline-none rounded-full pl-6 pr-10`} type="text" placeholder='Search' />
                        <IoMdSearch className='text-[#B3B1B7] text-3xl absolute right-3 top-1/2 -translate-y-1/2' />
                    </div>
                    <div className='py-6'>
                        <h2 className='font-Darker font-semibold text-[28px] text-black'>Recent posts</h2>
                        <div className='pt-2.5 border-b border-dashed border-[#B3B1B7]'></div>
                        <div className='py-6'>
                            <h4 className={`${roboto.className} font-medium text-sm leading-[170%] text-[#FF6231]`}>Dec 10, 2020</h4>
                            <h2 className='font-Darker font-semibold text-[22px] leading-[120%] text-black'>Launch of a new convenient feature this Saturday...</h2>
                            <h3 className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</h3>
                        </div>
                        <div>
                            <h4 className={`${roboto.className} font-medium text-sm leading-[170%] text-[#FF6231]`}>Dec 10, 2020</h4>
                            <h2 className='font-Darker font-semibold text-[22px] leading-[120%] text-black'>Launch of a new convenient feature this Saturday...</h2>
                            <h3 className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</h3>
                        </div>
                    </div>
                    <h2 className='font-Darker font-semibold text-[28px] text-black'>Recent comments</h2>
                    <div className='pt-2.5 border-b border-dashed border-[#B3B1B7]'></div>
                    <div className='flex flex-col gap-y-6 pt-6'>
                        <div>
                            <LuMessageCircle className='text-[#FF6231] text-3xl' />
                            <h3 className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</h3>
                        </div>
                        <div>
                            <LuMessageCircle className='text-[#FF6231] text-3xl' />
                            <h3 className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</h3>
                        </div>
                        <div>
                            <LuMessageCircle className='text-[#FF6231] text-3xl' />
                            <h3 className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</h3>
                        </div>
                    </div>
                    <Calendar />
                    <div className='grid grid-cols-3 gap-[1px] py-[50px]'>
                        <div className='w-[86px] h-[86px] bg-[#E6EBFC]'></div>
                        <div className='w-[86px] h-[86px] bg-[#E6EBFC]'></div>
                        <div className='w-[86px] h-[86px] bg-[#E6EBFC]'></div>
                        <div className='w-[86px] h-[86px] bg-[#E6EBFC]'></div>
                        <div className='w-[86px] h-[86px] bg-[#E6EBFC]'></div>
                        <div className='w-[86px] h-[86px] bg-[#E6EBFC]'></div>
                    </div>
                    <div>
                        <h2 className='font-Darker font-semibold text-[28px] text-black'>Tags</h2>
                        <div className='pt-2.5 border-b border-dashed border-[#B3B1B7]'></div>
                    </div>
                    <div className='w-full py-6'>
                        <div className='flex items-center '>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Android app</p>
                            <LuDot className='text-[#FF6231] text-2xl' />
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>IOS app</p>
                            <LuDot className='text-[#FF6231] text-2xl' />
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Mobile</p>
                        </div>
                        <div className='flex items-center gap-x-3 py-4'>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>App design</p>
                            <LuDot className='text-[#FF6231] text-2xl' />
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Development</p>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Collaboration</p>
                            <LuDot className='text-[#FF6231] text-2xl' />
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Download</p>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default BlogContent