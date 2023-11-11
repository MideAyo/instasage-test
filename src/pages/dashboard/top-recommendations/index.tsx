import DashboardLayout from "@/components/dashboard-layout";
import {recommendedBooks} from "@/utils/data";
import Image from "next/image";
import Stars from "@/components/dashboard/stars";


const TopRecommendations = ()=>{
    return(
        <DashboardLayout navChange={`\u2190 Back`} link={"/dashboard"}>
           <section className={`px-5 mt-6`}>
            <div>
                <h1 className={`font-inter font-600 text-sm sm:text-md md:text-lg `}>Top Recommendations For You</h1>
            </div>
               <div className={`w-[90%] max-w-3xl lg:grid grid-cols-2 lg:gap-x-16 mt-9`}>
                   {recommendedBooks.map((book)=>{
                       const{id, bookName, authorName, bookImage, authorImage, bookInfo, rating} = book
                       return (
                           <article className={`flex space-x-5 mb-12`} key={id}>
                            <Image src={`${bookImage}`} alt={`${bookName}`}
                                   width={0}
                                   height={0}
                                   className={`w-28 lg:w-32`}
                            />
                               <div className={`space-y-1.5 `}>
                                   <h2>{bookName}</h2>
                                   <p className={`text-xs max-w-xs`}>{bookInfo}</p>
                                   <div className={`flex items-center space-x-4`}>
                                       <p className={`font-inter font-600`}>{rating}</p>
                                   <Stars star={rating}/>
                                   </div>
                                   <div className={`flex items-center space-x-3`}>
                                       <Image src={`${authorImage}`} alt={`${authorName}`}
                                              width={0}
                                              height={0}
                                              className={`w-8`}
                                              />
                                       <p className={``} >{authorName}</p>
                                   </div>

                               </div>
                           </article>
                       )
                   })}
               </div>
           </section>
        </DashboardLayout>
    )
}
export default TopRecommendations