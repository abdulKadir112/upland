import React from 'react'
import video from '../../public/video.png'
import Container from '../layer/Container'
import Image from 'next/image'
import Dot from '../layer/Dot'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { roboto } from '../layout'
import { HiPlusSm } from "react-icons/hi";

const AskedQuestions = () => {
  return (
    <div>
        <Container className={"max-w-[1137px] mx-auto flex items-center justify-between py-[160px]"}>
            <div>
                <Image src={video} alt="video" />
            </div>
            <div className='w-[555px]'>
                <Dot/>
                <h1 className='heading pb-[50px]'>Frequently Asked Questions</h1>
                <div className='flex items-center justify-between border-b-2 border-dashed border-[#FF6231] pb-5'>
                    <p>How to start using Upland Application?</p>
                    <MdOutlineHorizontalRule className='text-[#FF6231] text-2xl' />
                </div>
                <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pl-5 pr-3 py-[30px]`}>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.</p>
                <div className='flex items-center justify-between border-b-2 border-dashed border-[#5437B2] pb-5'>
                    <h2 className='font-Darker font-semibold text-2xl leading-[110%] text-black'>How can I register?</h2>
                    <HiPlusSm />
                </div>
                <div className='flex items-center justify-between border-b-2 border-dashed border-[#5437B2] pt-5'>
                    <h2 className='font-Darker font-semibold text-2xl leading-[110%] text-black'>How can I register?</h2>
                    <HiPlusSm />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AskedQuestions