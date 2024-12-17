import Link from "next/link";
import { Darker_Grotesque, Roboto } from 'next/font/google'
import Container from "../layer/Container";
import Image from "next/image";
import phone from "../../public/bnnar/phone.png"
import left1 from "../../public/bnnar/leaf1.png"
import left2 from "../../public/bnnar/leaf2.png"
import left3 from "../../public/bnnar/leaf3.png"
import left4 from "../../public/bnnar/leaf4.png"
import like from "../../public/bnnar/like.png"
import love from "../../public/bnnar/love.png"
import massage from "../../public/bnnar/massage.png"
import roket from "../../public/bnnar/roket.png"
import text from "../../public/bnnar/text.png"
import  twitter from "../../public/bnnar/twitter.png"

const darkergrotesque = Darker_Grotesque({
    weight: "",
    subsets: ["latin"],
});

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <div className="bannerBg">
                <Container className={"flex justify-between items-center pt-[117px]"}>
                    <div>
                        <div className="left max-w-[567px]">
                            <p className={` ${roboto.className} font-medium text-xs leading-[170%] uppercase text-[#FF6231]`}>trendy application</p>
                            <h1 className={` ${darkergrotesque.className} text-[#fff] font-extrabold text-[5.00rem] leading-[90%] capitalize`}>work faster with powerful tools</h1>
                            <p className={` ${darkergrotesque.className} text-[#fff] font-medium text-[1.75rem] leading-[110%] mt-8 mb-[50px]`}>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                        </div>
                        <Link
                            href="#"
                            className={`${roboto.className} bg-red-400 py-4 px-[35px] rounded-[30px] font-medium text-base leading-[170%] capitalize text-[#fff] bannarbtn`}
                        >
                            Learn more
                        </Link>
                    </div>
                    <div className="relative object-cover">
                        <Image src={phone} alt="banner"/>
                        <div className="absolute top-[554px] left-[352px]">
                        <Image src={left1} alt="banner"/>
                        </div>
                        <div className="absolute top-[442px] -left-9">
                        <Image src={left2} alt="banner"/>
                        </div>
                        <div className="absolute top-[353px] left-[384px]">
                        <Image src={left3} alt="banner"/>
                        </div>
                        <div className="absolute top-[462px] -left-28">
                        <Image src={left4} alt="banner"/>
                        </div>
                        <div className="absolute right-0 top-[230px] translate-x-1/2">
                        <Image src={like} alt="banner"/>
                        </div>
                        <div className="absolute left-[95 px] top-[129px] translate-x-full">
                        <Image src={love} alt="banner"/>
                        </div>
                        <div className="absolute top-[496px] -right-[87px] -translate-y-1/2 translate-x-1/2">
                        <Image src={massage} alt="banner"/>
                        </div>
                        <div className="absolute left-5 top-[220px] -translate-x-16 -translate-y-1/3">
                        <Image src={roket} alt="banner"/>
                        </div>
                        <div className="absolute -right-[85px] top-[162px] translate-x-1/2 -translate-y-1/2">
                        <Image src={text} alt="banner"/>
                        </div>
                        <div className="absolute top-[361px] -right-[71px] translate-x-1/2 -translate-y-1/2">
                        <Image src={twitter} alt="banner"/>
                        </div>
                     </div>
                </Container>
            </div>
        </>
    );
}