import React from "react";
import Svg from "@/components/global/svg";

interface linkProps {
    link: {
        id: number,
        icon: string,
        linkName: string,
        linkTo: string,
    };
}
const SideLink: React.FC<linkProps> =({link})=>{
    const{ icon, linkName} = link
    return (
        <div className={`flex items-center mt-5 md:mt-7`}>
           <Svg icon={icon} className={`w-8`}/>
            <h2 className={`font-inter font-500 text-md md:text-lg lg:text-xl`}>{linkName}</h2>
        </div>
    )
}
export default SideLink