import React from "react";
import {search, navNotification, dashboardMenu} from "@/svg/icons";
import Svg from "@/components/global/svg";
import Image from "next/image";
import {useRouter} from "next/router";
import {useAppContext} from "@/store/contexts/appContext";


interface navProp{
   navChange : string
    link: string
}
const Navbar :React.FC<navProp> = ({navChange, link})=>{
    const router = useRouter()
    const handleClick=()=>{
        router.push(`${link}`)
    }
    const {toggleSideBar} = useAppContext()
    return(
        <div className={`flex px-5 justify-between items-center p-1 `}>
            <article className={`flex items-center md:hidden `}>
                <button onClick={toggleSideBar}>
                <Svg icon={dashboardMenu} className={`w-7 md:w-10 lg:w-10 `}/>
                </button>
                <Image src={`/images/company-logo.svg`} alt={`company-logo`}
                       width={0}
                       height={0}
                       className={`w-24`}
                       loading={`lazy`}
                />
            </article>
            {link === null ? <h2 className={`font-inter font-700 text-md md:text-lg lg:text-xl`}>{navChange}</h2>
                :
                <button onClick={handleClick}>
                    <h2 className={`font-inter font-700 text-md md:text-lg lg:text-xl hidden md:block`}>{navChange}</h2>
                </button>
            }
            <div className={`flex items-center space-x-4`}>
                <article className="relative flex justify-evenly  items-center">
                    <Svg icon={search} className={`absolute px-5 pr-28 sm:pr-36 md:pr-48 xl:pr-56`}/>
                    <input
                        type="text"
                        placeholder="Search Instasage"
                        className="pl-12 sm:pl-12 md:pl-16 p-3 rounded-full placeholder:text-md focus:outline-none w-36 sm:w-48 md:w-64 xl:w-72 bg-[#EFF2F5]"
                    />
                </article>
                <div className={`relative`}>
                <Svg icon={navNotification}/>
                    <div className={`absolute notification-inset  bg-red-800 w-4 h-4 rounded-full flex items-center justify-center`}>
                        <p className={`text-xs text-white`}>3</p>
                    </div>
                </div>
                <Image src={"/images/kenneth.svg"} alt={`user image`}
                width={50}
                height={50}
                loading={"lazy"}
                />
            </div>
        </div>
    )
}
export default Navbar