import Image from "next/image";
import Button from "@/components/inputs/button";
import {useRouter} from "next/router";


const PremiumFeatures = ()=>{
    const router = useRouter()
    const handleSubmit= ()=>{
         router.push("/get-started")
    }
    return (
        <section className={``}>
            <div>
            <header >
                <div className={`relative -mt-72`}>
                    <Image src={`/images/features.svg`} alt={`hero-image`}
                           width={0}
                           height={0}
                           loading={`lazy`}
                           className={`w-screen z-0`}
                    />
                    <div className={`absolute inset-top pb-20 mt-20 xl:mt-20 w-full text-center `}>
                     <h3 className={`text-primaryText font-700 text-md sm:text-lg lg:text-2xl font-dmSans`}>Premium features on Instasage</h3>
                        <p className={`text-darkShade mx-auto mt-1.5 max-w-sm md:max-w-none font-nunito`}>We believe in the power of knowledge and the beauty of shared wisdom</p>
                    </div>
                </div>
            </header>
            <article className={`bg-[#F6F7FF] pt-20 md:pt-4 lg:pt-0`}>
                <div className={`container md:max-wpt-16 -7xl px-10 md:px-20 flex flex-col items-center justify-center md:flex-row lg:space-x-28`}>
                    <div>
                  <h1 className={`font-dmSans text-darkerTint text-md sm:text-lg lg:text-2xl font-700 mx-auto max-w-md`}>
                      Audiobooks - Read and Listen
                  </h1>
                        <p className={`mt-4 text-colorDark max-w-sm md:text-md font-400 font-nunito`}>At Instasage, our audio feature revolutionizes the way you engage with books. Whether you're on the go, relaxing at home, or simply want to absorb knowledge in a different way, our audiobooks and <span className={`font-700`}>Read and Listen</span> option have you covered.</p>
                        <Button title={`Get Started`} className={`mt-8 mx-auto md:max-w-md bg-primaryColor text-white font-dmSans font-500 p-4 px-6 rounded-full`} onClick={handleSubmit}/>
                    </div>
                    <div className={`mt-8 md:mt-0`}>
                        <Image src={`/images/sage-circle.svg`} alt={`sage-circle`}
                               width={0}
                               height={0}
                               className={`w-[100%] mx-auto`}
                               loading={`lazy`}
                               />
                    </div>
                </div>
            </article>
            </div>
        </section>
    )
}
export default PremiumFeatures