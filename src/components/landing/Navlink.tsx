import React from "react"
import Link from  "next/link"

interface linkProps {
    link: {
        id: number,
        linkTo: string,
        path: string
    };
}
const Navlink : React.FC<linkProps> = ({link})=>{
    const{linkTo, path} = link
    return (
        <Link href={`/${path}`}>
        <article>
            <button className={`cursor-pointer md:text-xl font-600 font-nunito`}>
          <p>{linkTo}</p>
            </button>
        </article>
        </Link>
    )
}
export default Navlink