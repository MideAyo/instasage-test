import Svg from "@/components/global/svg";
import React from "react";
import {useRouter} from "next/router";
interface btnProps
{
    title: string;
    icon: string;
    link: string;
}
const PageButton:React.FC<btnProps> = (props) =>{
    const{title, icon, link} = props
    const router = useRouter()
    const handleClick=()=>{
        router.push(`${link}`)
    }
    return (
        <button className={`flex items-center space-x-2`} onClick={handleClick}>
            <p className={`text-[#0769ED] font-inter font-600`}>{title}</p>
            <Svg icon={icon} className={`mt-0.5`}/>
        </button>
    )
}
export default PageButton