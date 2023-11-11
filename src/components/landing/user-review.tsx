import React from "react";
import Svg from "@/components/global/svg";
import Image from "next/image";

interface reviewProps {
    eachReview: {
        id: number,
        name: string,
        review: string,
        userImage: string,
        bluequote: string
    };
}
const UserReview: React.FC<reviewProps> =({eachReview})=>{
    const{name, review, userImage, bluequote} = eachReview
    return (
        <article className={`bg-white rounded-xl p-7 shadow-md flex flex-col mx-auto max-w-md mb-12`}>
            <div>
               <Svg icon={bluequote} className={``}/>
            </div>
            <p className={`mt-6`}>{review}</p>
            <div className={`flex items-center space-x-6 mt-14`}>
                <Image src={`${userImage}`} alt={`user-image`}
                       width={0}
                       height={0}
                       loading={"lazy"}
                       className={`w-10`}
                />
                <p>{name}</p>
            </div>
        </article>
    )
}
export default UserReview