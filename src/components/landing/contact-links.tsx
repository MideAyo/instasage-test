import React from "react";

interface linkProps {
    eachLink: {
        id: number,
        linkTo: string,
        link: ""
    };
}

const Contacts: React.FC<linkProps> = ({eachLink})=>{
    const{linkTo} = eachLink
    return (
       <article>
        <p>{linkTo}</p>
       </article>
    )
}
export default Contacts