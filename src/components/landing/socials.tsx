import React from "react";
import Svg from "@/components/global/svg";

interface socialsProps {
    social: {
        id: number,
        icon: string,
    };
}
const Socials: React.FC<socialsProps> = ({social})=>{
    const{icon} = social
    return (
        <article>
        <Svg icon={icon} />
        </article>
    )
}

export default Socials