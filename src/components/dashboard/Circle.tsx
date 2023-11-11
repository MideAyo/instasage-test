import Image from "next/image";
import Svg from "@/components/global/svg";
import {sageCircleIcon} from "@/svg/icons";
import React from "react";

export type circleProps = {
    circle:
        {
            id: number;
            circleName: string;
            members: number;
            info: string;
            circleImage: string;
        }
}
const Circles: React.FC<circleProps> = ({circle})=>{
    const{circleName, members, info, circleImage} = circle
    return (
        <article className={`bg-[#E8F0FB]`}>
            <Image src={`${circleImage}`} alt={`${circleName}`}
                   width={0}
                   height={0}
                   className={`w-[100%]`}
                   loading={`lazy`}
            />
            <div className={`space-y-3 p-3`}>
                <div>
                    <h1 className={`text-sm font-inter`}> {circleName}</h1>
                    <div className={`flex space-x-2 items-center`}>
                        <Svg icon={sageCircleIcon}/>
                        <p className={`font-inter`}>{members} members</p>
                    </div>
                </div>
                <p className={`text-xs font-inter`}>{info}</p>
            </div>
        </article>
    )
}
export default Circles