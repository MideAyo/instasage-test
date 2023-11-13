import Image from "next/image";

const ShareKnowledge = ()=>{
    //
    return(
       <section className={`py-8`}>
         <div className={`md:flex md:items-center container lg:p-0 max-w-4xl`}>
             <article className={`mx-auto max-w-xs mt-4 lg:max-w-sm md:order-2`}>
                 <h2 className={`mb-6 font-dmSans font-700 text-md sm:text-lg lg:text-2xl text-darkerTint `}>Share Your Knowledge With The World</h2>
                 <p className={`mb-6 font-nunito text-dark`}>
                     Are you an author seeking to share your intellectual work with the world? Instasage provides a seamless platform to publish and promote your books to a diverse and engaged community of readers.
                 </p>
                 <button>
                     <p className={`text-primaryColor font-700`}>Learn more</p>
                 </button>
             </article>
             <article className={`mx-auto md:order-1`}>
                 <Image src={`/images/sage-knowledge.svg`} alt={`sage-knowledge`}
                        width={0}
                        height={0}
                        className={`w-[85%]`}
                        loading={"lazy"}
                 />
             </article>
         </div>
       </section>
    )
}
export default ShareKnowledge