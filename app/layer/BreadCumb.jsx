'use client'
import React from 'react'
import '../post/post.css'
import Link from 'next/link'
import { codystar, roboto } from '@/app/layout'
import { usePathname } from 'next/navigation'
import { LuDot } from "react-icons/lu";
import Container from './Container'

const BredCumb = () => {
  const pathname = usePathname()
  return (
    <div className='navBg2 relative pt-[159px] pb-[181px]'>
        <Container>
        <h2 className='font-Darker font-semibold text-6xl text-white capitalize'>{pathname.split("/") [1]}</h2>
        <div className='flex gap-x-3 pt-[30px]'>
          <Link className={`${roboto.className} font-normal text-sm text-[#B3B1B7]`} href={'/'}>Home</Link>
          <LuDot className='text-white'/>
          <p className={`${roboto.className} font-normal text-sm text-[#B3B1B7] capitalize`}>{pathname.split("/")[1]}</p>
        </div>
        <h3 className={`${codystar.className} font-normal text-[120px] uppercase text-[#CCCCCC] absolute right-full top-[230px]`}>{pathname.split("/")[1]}</h3>
        </Container>
    </div>
  )
}

export default BredCumb