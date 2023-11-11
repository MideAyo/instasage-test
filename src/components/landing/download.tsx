import AppDownload from "@/components/global/app-download";
import Image from "next/image";

const Download = ()=>{
    //
    // flex flex-col pt-10 md:flex-row md:items-center md:justify-center container md:max-w-7xl px-10 md:px-20 lg:px-16 items-center justify-center
    return (
        <section className={`bg-download-gradient`}>
            <div className={` container md:max-w-6xl px-20 lg:px-8 pt-16 flex flex-col space-y-8 md:space-y-0  items-center justify-center md:flex-row`}>
                <article className={`max-w-xs md:max-w-sm mx-auto flex flex-col space-y-5`}>
                    <h2 className={`font-700 text-md sm:text-lg lg:text-2xl text-white font-dmSans`}>Download The Instasage App</h2>
                    <p className={`font-nunito text-white`}>
                        With Instasage, you can easily track your reading progress. Set goals, mark favorite passages, and keep tabs on your intellectual journey.
                    </p>
                    <AppDownload/>
                </article>
                <article className={`mx-auto`}>
                    <Image src={`/images/reading-progress.svg`} alt={`reading-progress`}
                           width={0}
                           height={0}
                           loading={"lazy"}
                           className={`w-[85%]`}

                    />
                </article>
            </div>
        </section>
    )
}
export default Download