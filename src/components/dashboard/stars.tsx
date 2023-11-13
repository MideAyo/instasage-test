import React from "react";
import Svg from "@/components/global/svg";
import {fullStar, nullStar} from "@/svg/icons";
interface StarProps {
    star: number
}
const Stars: React.FC<StarProps>= ({star})=>{
    return (
        <article className={`flex`}>
            {star < 1 ? <Svg icon={nullStar}/>  : <Svg icon={fullStar}/> }
            {star < 2 ? <Svg icon={nullStar}/>  : <Svg icon={fullStar}/> }
            {star < 3 ? <Svg icon={nullStar}/>  : <Svg icon={fullStar}/> }
            {star < 4 ? <Svg icon={nullStar}/>  : <Svg icon={fullStar}/> }
            {star < 5 ? <Svg icon={nullStar}/>  : <Svg icon={fullStar}/> }
        </article>
    )
}
export default Stars