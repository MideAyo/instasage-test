import AppDownload from "@/components/global/app-download";
import Image from "next/image";

const Hero = ()=>{
    return (
        <section className={`relative pb-64`}>
            <Image src={`/images/Section.png`} alt={`hero-img`}
                   width={0}
                   height={0}
                   className={`w-screen h-[80%] xl:h-[85%] absolute z-0`}
            />
            <div className={`z-30 relative container md:max-w-7xl p-10 md:px-20 xl:px-32 pb-20 md:flex md:items-center md:justify-center md:space-x-10 xl:space-x-24`}>
                <article className={`mx-auto max-w-sm xl:max-w-lg`}>
                    <h3 className={`font-dmSans text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:max-w-xs lg:max-w-md xl:max-w-lg text-primaryText font-700 lg:leading-snug xl:leading-tight`}>
                        Expand <span className={`text-textDark`}>your mind one page at a time</span>
                    </h3>
                     <p className={`lg:max-w-md md:max-w-lg mt-5 mb-8 font-nunito text-sm sm:text-md md:text-lg`}>
                         Discover intellectual contents, read captivating books, and join Sage Circles for enlightening discussions.
                     </p>
                     <AppDownload/>
                </article>
                <article className={`mt-8 `}>
                    <Image src={`/images/Hero Image.svg`} alt={`hero-image`}
                           width={0}
                           height={0}
                           loading={`lazy`}
                           className={`w-[88%] xl:w-[98%] `}
                           />
                </article>
            </div>
        </section>
    )
}

export default Hero