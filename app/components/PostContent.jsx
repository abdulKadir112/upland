import React from 'react'
import Container from '../layer/Container'
import { roboto } from '../layout'
import { LuDot, LuShare2 } from "react-icons/lu";
import Image from 'next/image';
import nineLogo from '../../public/99.png'
import { IoMdSearch, } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import Calendar from './Calendar';
import Comments from './Comments';





const PostContent = () => {
    return (
        <div>
            <Container className={"flex justify-between"}>
                <div>
                    <div className='max-w-[828px] border-b-2 border-dashed border-[#5437b246]'>
                        <div className='relative w-[828px] h-[400px] bg-[#E6EBFC] rounded-[20px]'>
                            <div className='p-4 bg-[#FF6231] rounded-t-[10px] absolute left-10 bottom-0 flex flex-col items-center'>
                                <p className={`${roboto.className} font-medium text-sm text-white uppercase`}>Dec</p>
                                <h1 className={`${roboto.className} font-bold text-[28px] text-white`}>10</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-3 pt-[30px]'>
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
                        <div className='pt-[30px] border-b-2 border-dashed border-[#5437b246]'></div>
                        <div>
                            <h1 className='font-Darker font-semibold text-[36px] text-[#000000] capitalize'>a selection of the best apps for 2020</h1>
                            <div className='max-w-[828px] pt-6 pb-10'>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small, Portugal-based team is itself focused on scaling, having much participated in accelerator
                                </p>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-5`}>
                                    In this episode, Attentive founder Robert Fox talks about what it takes to build a tech new product from the ground up. Discover their approach to running an engineering team, from adopting new open source technologies, to onboarding junior developers and learning .
                                </p>
                            </div>
                        </div>
                        <div className='max-w-[828px]  py-[50px] pl-[50px] pr-[70px]'>
                            <p className='font-Darker font-medium text-[28px] text-[#000000]  pb-[22px]'>“Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non aliqua occaecat ea sunt. Commodo non duis aute mollit sint. Mollit veniam dolor aliqua nulla sit est do mollit esse ut amet.”</p>
                            <div className='flex items-center justify-between'>
                                <h3 className='font-Darker font-semibold text-[22px] text-[#000000]'>Robert Fox</h3>
                                <Image src={nineLogo} alt='/' width={50} height={50} />
                            </div>
                        </div>
                        <div>
                            <h2 className='font-Darker font-semibold text-[28px] text-black'>Better Security and faster Server</h2>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-[30px] pb-10`}>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small.</p>
                            <ul className='flex flex-col gap-y-4 pl-10'>
                                <li className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] list-disc marker:text-[#FF6231]`}>We’ve been supporting WordPress since the beginning.</li>
                                <li className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] list-disc marker:text-[#FF6231]`}>Our easy-to-use control panel and API let you spend.</li>
                                <li className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] list-disc marker:text-[#FF6231]`}>Perfect for large sites or agencies managing multiple clients.</li>
                            </ul>
                            <div className='max-w-[828px] pt-6 pb-10'>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small, Portugal-based team is itself focused on scaling, having much participated in accelerator
                                </p>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-5`}>
                                    In this episode, Attentive founder Robert Fox talks about what it takes to build a tech new product from the ground up. Discover their approach to running an engineering team, from adopting new open source technologies, to onboarding junior developers and learning .
                                </p>
                            </div>
                            <div className='flex items-center gap-x-7 pb-5'>
                                <h4 className={`${roboto.className} font-medium text-base leading-[170%] text-black`}>Tags:</h4>
                                <div className='flex items-center gap-x-3'>
                                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Android app</p>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>IOS app</p>
                                    <LuDot className='text-[#FF6231] text-2xl' />
                                    <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Mobile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-[60px] p-10 pl-5'>
                        <div className='w-[110px] h-[110px] bg-[#CEA6DC] rounded-full'>

                        </div>
                        <div className='w-[508px]'>
                            <h3 className='font-Darker font-semibold text-[28px] leading-[110%] text-black'>Robert Fox</h3>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pb-9 pt-3`}>Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non accaecat ea sunt.</p>
                            <div className='flex items-center gap-x-3'>
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>FB</p>
                                <LuDot className='text-[#FF6231] text-2xl' />
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>TW</p>
                                <LuDot className='text-[#FF6231] text-2xl' />
                                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>IN</p>
                            </div>
                        </div>
                    </div>
                    <Comments />
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

export default PostContent