import React from "react";

interface linkProps {
    eachLink: {
        id: number,
        linkTo: string,
        link: string
    };
}

const InsightsLinks: React.FC<linkProps> = ({eachLink})=>{
    const{ linkTo} = eachLink
    return (
        <article>
         <p>{linkTo}</p>
        </article>
    )
}
export default  InsightsLinks