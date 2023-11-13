import DashboardLayout from "@/components/dashboard-layout";
import {sageCircle} from "@/utils/data";
import Image from "next/image";
import Svg from "@/components/global/svg";
import {sageCircleIcon} from "@/svg/icons";

const FeaturedSageCircles = ()=>{
    return(
        <DashboardLayout navChange={`\u2190 Back`} link={"/dashboard"}>
            <section className={`px-5 mt-6`}>
            <div className={`font-inter`}>
            <h2 className={`font-600 text-sm sm:text-md md:text-lg lg:text-xl`}>Featured Sage Circles</h2>
            <p className={`text-[#445360]`}>Share your knowledge with like-minds</p>
            </div>
                <div className={`w-[90%] md:grid grid-cols-2 mt-8`}>
                    {sageCircle.map((circle)=>{
                        const{id, circleName, circleImage, members,info} = circle
                        return (
                            <article className={`mx-auto md:mx-0 w-[80%] md:w-[90%] lg:w-[60%] max-w-xl mb-12 border rounded-lg `} key={id}>
                                <Image src={`${circleImage}`} alt={`${circleName}`}
                                width={0}
                                height={0}
                                className={`w-full`}
                                />
                                <div className={`p-4 space-y-2 font-inter`}>
                                <h2 className={`font-600`}>{circleName}</h2>
                                <div className={`flex items-center space-x-3`}>
                                    <Svg icon={sageCircleIcon}/>
                                    <p><span className={`font-600`}>{members}</span> members</p>
                                </div>
                                <Image src={`/images/Avatars.svg`} alt={`avatar`}
                                       width={0}
                                       height={0}
                                       className={`w-20`}
                                       />
                                <p className={`text-xs md:text-sm`}>{info}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </DashboardLayout>
    )
}

export default FeaturedSageCircles