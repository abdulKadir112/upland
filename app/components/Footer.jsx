import React from 'react'
import Container from '../layer/Container'
import { roboto } from '../layout'
import Image from 'next/image'
import mass from '../../public/footerml.png'
import Link from 'next/link'
import { LuDot } from "react-icons/lu";
import Dot from '../layer/Dot'

const Footer = () => {
  return (
    <div className='footerBg'>
      <Container className={"mt-52"}>
        <div className=''>
          <div className='bg-white w-full h-[350px] rounded-[20px] relative'>
            <div className='absolute left-10 bottom-10'>
              <Image src={mass} alt="logo" />
            </div>
            <div className='absolute left-[453px] bottom-5 pb-[70px]'>
              <div className='relative flex gap-x-3 items-center'>
                <Dot/>
                <p className={`${roboto.className} font-medium text-[12px] leading-[170%] text-[#FF6231] uppercase`}>Newsletter</p>
              </div>
              <h2 className='font-Darker font-semibold text-[36px] leading-[100%] text-black pb-4'>Be aware of new features</h2>
              <p className={`w-[438px] ${roboto.className} font-normal text-base leading-[170%] text-[#888888] pb-6 pt-4`}>Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
              <div className='flex gap-x-5'>
                <div className=''>
                  <input type="text" className='w-[435px] bg-[#F2F2F2] py-5 outline-none rounded-full px-8 ' placeholder='Email' />
                </div>
                <button className=' bg-gradient-to-r from-[#FF6231] to-[#FFA979] text-white py-4 px-9 rounded-full'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="menu flex gap-x-7 items-center pl-[222px] pt-[118px]">
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>Features</Link></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>Download app</Link></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>UI screens</Link></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>Testimonials</Link></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>FAQ</Link></li>
            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
            <li className={`${roboto.className} font-normal text-[#FF6231] text-base leading-[170%] border-2 border-[#FF6231] px-4 py-1 rounded-full`}><Link href='#'>Free trial</Link></li>
          </ul>
        </div>
        <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#B3B1B7] text-center pt-[70px]`}>© All rights reserved. abdulkadir 2024 </p>
      </Container>
    </div>
  )
}

export default Footer