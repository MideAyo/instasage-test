import Layout from "@/components/layout";
import Image from "next/image";
import Start from "@/components/global/start-journey";


const GetStarted = ()=>{
    return (
        <Layout>
           <article className={`bg-[#EDF3FF] container max-w-2xl text-center pl-16 pr-2 mt-16 mb-20`}>
            <h2 className={`font-nunito pt-8 font-700 md:text-xl lg:text-2xl `}>Scan QR Code, to download Instasage</h2>
               <p className={`mt-3 font-nunito font-500`}>Scan the QR Code with your phone’s camera download Instasage App</p>
               <article className={`md:flex justify-between mt-12 mb-20 `}>
               <div className={`bg-white md:mb-8 rounded-md container w-36 sm:w-48 md:w-[70%]  `}>
               <div className={`p-6`}>
                   <Image src={`/images/Qr-code.svg`} alt={`qr-code`}
                          width={0}
                          height={0}
                          className={`w-[100%]`}
                          />
               </div>
                   <h1 className={`text-center text-sm md:text-lg lg:text-2xl -mt-3 text-primaryColor font-dmSans font-400`}> Download App </h1>
                   </div>
               <div className={`md:mt-8 md:mb-0`}>
                   <Image src={`/images/download-img.svg`} alt={`download-img`}
                          width={0}
                          height={0}
                          className={`w-[60%] md:w-[80%] mx-auto md:mx-20`}
                          />
               </div>
               </article>
           </article>
            <Start/>
        </Layout>
    )
}
export default GetStarted