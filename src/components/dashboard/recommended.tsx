import Image from "next/image";
import React from "react";

export type bookProps = {
    book: {
        id: number;
        bookName: string;
        bookInfo: string;
        authorName: string;
        bookImage: string;
        authorImage: string;
    };
}
const Recommended: React.FC<bookProps> = ({book})=>{
    const{bookName,bookInfo,  authorName, bookImage, authorImage} = book
    return(
        <article className={`bg-[#E8F0FB] h-44 lg:h-fit  p-2 flex items-center space-x-8`}>
            <Image src={`${bookImage}`} alt={`${bookName}`}
                   width={100}
                   height={400}
                   loading={`lazy`}
            />
            <div className={`space-y-2 xl:space-y-3`}>
                <h1 className={`text-xs font-600 font-inter`}> {bookName}</h1>
                <p className={`text-[.60rem] font-inter`}>{bookInfo}</p>
                <div className={`flex items-center space-x-3`}>
                    <Image src={authorImage} alt={`${authorName}`}
                           width={0}
                           height={0}
                           className={`w-6 md:w-8`}
                           loading={`lazy`}
                    />
                    <h2 className={`text-xs font-inter`}>{authorName}</h2>
                </div>
            </div>
        </article>
    )
}
export default Recommended