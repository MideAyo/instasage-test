import AppDownload from "@/components/global/app-download";
import Image from "next/image";

const Start = ()=>{
    return (
        <div className={`pb-20`}>
        <article className={`mt-16 sage-gradient md:rounded-3xl pt-8 md:container px-10 xl:max-w-screen-lg`}>
            <div className={`md:flex items-center justify-center md:space-x-40`}>
            <div className={`flex flex-col space-y-4 max-w-xs mx-auto md:mx-0 md:pb-16`}>
                <h1 className={`font-nunito text-white text-sm md:text-md lg:text-lg`}>Download The Instasage App</h1>
                <h2 className={`font-dmSans font-700 text-white text-md sm:text-xl md:text-2xl lg:text-3xl xl:leading-snug`}>Start your journey to become a SAGE</h2>
                <AppDownload/>
            </div>
            <div className={`mt-12`}>
                <Image src={`/Images/Rectangle.svg`} alt={`phone-img`}
                       width={0}
                       height={0}
                       className={`w-44 mx-auto lg:w-[100%]`}
                       />
            </div>
            </div>
        </article>
        </div>
    )
}
export default Start

