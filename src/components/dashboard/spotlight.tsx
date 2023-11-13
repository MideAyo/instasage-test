import Image from "next/image";
import Stars from "@/components/dashboard/stars";
import Svg from "@/components/global/svg";
import {chevronRight, download, whiteBook} from "@/svg/icons";
import PageButton from "@/components/inputs/page-button";

const Spotlight = ()=>{
    const spot = {
        bookName : "Democracy and Education",
        author: "John Deewey",
        info: "In Democracy and Education, Dewey argues that the primary ineluctable facts of the birth and death of each one of the constituent members in a social group determine the necessity of education. On one hand, there is the contrast between the immaturity of the new-born members of the group (its future sole representatives) and the maturity of the adult members who possess the knowledge and customs of th ...",
        star: 5
    }
    const{bookName, author, info, star} = spot
    return (
        <article className={`border border-t-0 border-l-0`}>
            <div className={`px-5 pt-8 pb-5 `}>
            <h1 className={`font-inter font-600 text-md md:text-lg `}>Spotlight of The Day</h1>
                <div className={`flex space-x-4 mt-5`}>
                    <Image src={`images/books/spotlight.svg`} alt={`spotlight-image`}
                    width={0}
                    height={0}
                    className={`w-[50%] md:w-[43%] xl:w-40 `}
                    loading={"lazy"}
                    />
                    <div className={`mt-0 md:-mt-1`}>
                      <h1 className={`text-[#000] font-inter font-600`}>{bookName}</h1>
                        <article className={`flex items-center space-x-6`}>
                            <div className={`flex items-center space-x-2 mt-1`}>
                             <Image src={`/images/books/john-deewey.svg`} alt={`author-img`}
                             width={0}
                             height={0}
                             className={`w-10`}
                             loading={`lazy`}
                             />
                                <p className={`font-inter font-700 text-sm`}> {author} </p>
                            </div>
                            <div className={`mt-1 flex items-center space-x-2`}>
                            <Stars star={star} />
                                <p className={`font-inter font-500`}>4.8k</p>
                            </div>
                        </article>
                        <article className={`flex items-center space-x-4 mt-3 md:mt-4`}>
                            <button className={`flex items-center space-x-3 bg-[#0769ED] p-2 px-4 rounded-full`}>
                                <Svg icon={whiteBook}/>
                                <p className={`text-white font-inter`}>Start Reading</p>
                            </button>
                            <button className={`bg-[#E7ECF0] p-2.5 rounded-full`}>
                            <Svg icon={download}/>
                            </button>
                        </article>
                        <article className={`mt-2 md:mt-4 xl:mt-7`}>
                           <p className={`text-[0.6rem] md:text-xs`}> {info}</p>
                            <div className={`float-right`}>
                           <PageButton title={`Read more`} icon={chevronRight} link={``}/>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Spotlight