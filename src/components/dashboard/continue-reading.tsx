import Image from "next/image";
import {topCategories} from "@/utils/data";

const ContinueReading =()=>{
    const book = {
        name: "The Mastery of Destiny",
        author: "James Allen",
        bookCover: "images/books/the-mastery-of-destiny.svg"
    }
    return (
        <section className={`p-3 hidden lg:block`}>
        <article className={`bg-[#F1F6FA] w-full rounded-3xl xl:px-4`}>
         <div className={`flex justify-between p-3 font-inter font-600 xl:text-md`}>
         <h1>Continue Reading</h1>
             <p>READING</p>
         </div>
            <div className={`p-3 flex space-x-5`}>
                <Image src={`${book.bookCover}`} alt={`${book.name}`}
                       width={0}
                       height={0}
                       loading={"lazy"}
                       className={`w-[22%] `}
                       />
                <div className={`font-inter`}>
                    <h2 className={`font-600`}>{book.name}</h2>
                    <p>{book.author}</p>
                </div>
            </div>
            <div className={`px-3 pb-8`}>
            <div className={`w-full relative h-2 bg-[#D9D9D9] rounded-full`}>
                  <div className={`w-[45%] h-2 bg-[#0769ED] absolute rounded-md `}>
                  </div>
            </div>
            </div>
        </article>
            <article className={`bg-[#F1F6FA] w-full rounded-3xl xl:px-4 mt-8`}>
                <div className={`p-3`}>
                    <h2 className={`font-inter font-600 xl:text-lg `}>Top Categories</h2>
                    {topCategories.map((categories)=>{
                        const{id, category} = categories
                        return (
                            <article key={id} className={`mt-4 flex items-center space-x-4`}>
                             <Image src={`images/categoryIcon.svg`} alt={`icon`}
                                    width={0}
                                    height={0}
                                    className={`w-12`}
                                    loading={`lazy`}
                             />
                                <h2 className={`font-inter font-500`}>{category}</h2>
                            </article>
                        )
                    })}
                    <button className={`mt-4`}>
                        <h2 className={`font-inter font-600 xl:text-lg text-[#0769ED]`}>Show more</h2>
                    </button>
                </div>
            </article>
        </section>
    )
}
export default ContinueReading