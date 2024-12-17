
import Logo from '../../public/Logo.png'
import Link from 'next/link'
import Container from '../layer/Container'
import { roboto } from '@/app/layout'
import { LuDot } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className=" absolute top-[50px] left-0 w-full z-50">
            <Container className={"max-w-[1780px]"}>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className="logo">
                            <Image src={Logo} alt='Logo' />
                        </div>
                        <ul className="menu flex gap-x-7 items-center pl-[222px]">
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>Features</Link></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='/post'>Download app</Link></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>UI screens</Link></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='/blog'>Testimonials</Link></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><Link href='#'>FAQ</Link></li>
                            <li className={`${roboto.className} font-normal text-white text-base leading-[170%]`}><LuDot /></li>
                            <li className={`${roboto.className} font-normal text-[#FF6231] text-base leading-[170%] border-2 border-[#FF6231] px-4 py-1 rounded-full`}><Link href='#'>Free trial</Link></li>
                        </ul>
                    </div>
                    <div className="btn">
                        <Link className='flex items-center gap-x-1.5' href='#'><FiSmartphone className='text-[#FF6231] text-2xl' /> <span className={`${roboto.className} font-normal text-white text-[19px] `}>+17426584122</span></Link>
                        
                    </div>
                </div>
            </Container>
        </div>


    )
}

export default Navbar;
