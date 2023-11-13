import React from "react";
import Link from "next/link"

interface linkProps {
    eachLink: {
        id: number,
        linkTo: string,
        link: string
    };
}

const CompanyLinks: React.FC<linkProps> = ({eachLink})=> {
    const{ linkTo, link} = eachLink
    return (
        <Link href={`/${link}`}>
        <article>
          <p>{linkTo}</p>
        </article>
        </Link>
    )
}
export default CompanyLinks
