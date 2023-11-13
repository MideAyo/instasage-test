import Image from "next/image";
import {navLinks} from "@/utils/data";
import Navlink from "@/components/landing/Navlink";
import Svg from "@/components/global/svg";
import {menu} from "@/svg/icons";
import Link from "next/link";
import Button from "@/components/inputs/button";
import {useRouter} from "next/router";


const Navbar = ()=>{
    const router = useRouter()
    const handleSubmit= async()=>{
        await router.push("/dashboard")
    }
    return(
       <nav>
           <div className={`flex py-5 container md:max-w-6xl px-10 pt-8 md:px-20 lg:px-20 xl:px-32 xl:max-w-7xl items-center justify-between`}>
               <Link href={"/"}>
               <article>
                   <Image src={`/images/company-logo.svg`} alt={`company-logo`}
                          width={0}
                          height={0}
                          className={`w-32 md:w-36`}
                          loading={`lazy`}
                   />
               </article>
               </Link>
               <article className={`hidden lg:flex items-center space-x-24`}>
                   <div className={`flex space-x-10`}>
                   {navLinks.map((link)=>{
                       return (
                           <Navlink link={link} key={link.id}/>
                       )
                   })}
                   </div>
                   <Button title={`Publish Books`} className={`bg-primaryColor text-white md:text-xl font-500 font-dmSans p-4 px-7 rounded-full`} onClick={handleSubmit}/>
               </article>
               <article className={`lg:hidden`}>
                   <Svg icon={menu} className={`w-10`}/>
               </article>
           </div>
       </nav>
    )
}
export default Navbar