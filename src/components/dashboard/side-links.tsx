import SideLink from "@/components/dashboard/side-link";
import React from "react";

export type LinkProps = {
    dashboardLinks : {
        id: number,
        icon:string,
        linkTo: string,
        linkName: string
    }[]
}
const SideLinks: React.FC<LinkProps> = (props)=>{
    const{dashboardLinks} = props
    return (
        <article className={`mt-0 md:mt-12 `}>
            {dashboardLinks.map((link)=>{
                return(
                    <SideLink link={link} key={link.id}/>
                )
            })}
        </article>
    )
}
export default SideLinks