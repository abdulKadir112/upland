import Image from 'next/image'
import React from 'react'
import nineLogo from '../../public/99.png'
import { roboto } from '../layout'

const AboutCard = ({name}) => {
  return (
    <div className='w-[480px] bg-white rounded-[20px] px-10'>
        <Image src={nineLogo} alt="logo"/>
        <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-4 pb-[30px]`}>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
        <div className='flex gap-x-5 items-center'>
            <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8]'></div>
            <p className={`${roboto.className} font-medium text-base leading-[170%] text-black`}>{name}</p>
        </div>
    </div>
  )
}

export default AboutCard