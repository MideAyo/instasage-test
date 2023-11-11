import { chevronDown, chevronUp, dashboardMenu} from "@/svg/icons";
import Svg from "@/components/global/svg";
import Image from "next/image";
import SideLinks from "@/components/dashboard/side-links";
import {dashboardLinks, moreLinks} from "@/utils/data";
import {useState} from "react";
import {useAppContext} from "@/store/contexts/appContext";

const Sidebar = ()=>{
    const[showLess, setShowLess] = useState(true)
    const{toggleSideBar, isSideBarOpen} = useAppContext()

    const handleShow = ()=>{
        setShowLess(!showLess)
    }
    return (
        <div className={isSideBarOpen ?`fixed z-50 bg-[#F1F6FA] md:bg-white md:block md:relative w-[50%] md:w-80 lg:w-64 xl:w-72  border border-b-0 border-r-0 border-t-0 border-l-0 trans h-full` : `hidden md:block trans transition  `}>
            <div className={`border border-t-0 pb-3 border-l-0 w-[100%] border-[#E8F0FB] p-4`}>
           <article className={`flex items-center space-x-5 md:space-x-1 `}>
               <button onClick={toggleSideBar}>
               <Svg icon={dashboardMenu} className={`w-7 md:w-10 lg:w-10 `}/>
               </button>
               <Image src={`/images/company-logo.svg`} alt={`company-logo`}
                      width={0}
                      height={0}
                      className={`w-24`}
               />
           </article>
              <SideLinks dashboardLinks={dashboardLinks}/>
                <article className={`mt-5`} onClick={handleShow}>
                    {showLess ?
                        <button className={`flex items-center -space-x-4`}>
                            <Svg icon={chevronUp} className={`w-12`}/>
                            <h2 className={`font-inter font-500 text-md md:text-lg lg:text-xl`}>Show Less</h2>
                        </button>
                        :
                        <button className={`flex items-center -space-x-4`} >
                            <Svg icon={chevronDown} className={`w-12`}/>
                            <h2 className={`font-inter font-500 text-md md:text-lg lg:text-xl`}>Show More</h2>
                        </button>}
                </article>
            </div>
            <article>
            {showLess && <div className={`border h-72 border-b-0 border-[#E8F0FB] p-4`}>
                <SideLinks dashboardLinks={moreLinks}/>
              </div>}
            </article>
              <article className={showLess ?`border -mt-32 md:-mt-0 border-t-0 border-b-0 border-l-0 h-12 xl:h-10` :`border  md:-mt-0 border-t-0 border-b-0 border-l-0 h-12 xl:h-10`}>
                  <div className={showLess ? `p-4 flex space-x-4` : `p-3 pt-16 flex space-x-4`}>
                      <Image src={"/images/kenneth.svg"} alt={`user-image`}
                             width={0}
                             height={0}
                             className={`w-8 sm:w-12 md:w-14 `}
                             loading={`lazy`}
                      />
                      <div>
                          <h2 className={`font-inter font-600 text-md lg:text-lg`}>Kenneth Irechukwu</h2>
                          <p className={``}>@IreKenn</p>
                      </div>
                  </div>
              </article>
        </div>
    )
}
export default Sidebar