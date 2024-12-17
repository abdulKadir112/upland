import React from 'react'
import Container from '../layer/Container'
import Image from 'next/image'
import dev from '../../public/Development.jpg'
import Money from '../../public/Money.jpg'
import Usability from '../../public/Usability.jpg'
import { roboto } from '../layout'

const GetWithUs = () => {
    return (
        <div>
            <Container className={"py-32"}>
                <h1 className='heading text-center'>See what you will get with us</h1>
                <div className='flex justify-between pt-[50px]'>
                    <div className='w-[360px]'>
                        <Image src={dev} alt="dev" className='p-8' />
                        <h2 className='font-Darker font-semibold text-[28px] text-black px-10'>Development courses</h2>
                        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-4 px-10 pb-[50px]`}>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                    </div>
                    <div className='w-[360px]'>
                        <Image src={Money} alt="Money" className='p-8' />
                        <h2 className='font-Darker font-semibold text-[28px] text-black px-10'>Money saving services</h2>
                        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-4 px-10 pb-[50px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className='w-[360px]'>
                        <Image src={Usability} alt="Usability" className='p-8' />
                        <h2 className='font-Darker font-semibold text-[28px] text-black px-10'>Usability interface</h2>
                        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-4 px-10 pb-[50px]`}>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GetWithUs