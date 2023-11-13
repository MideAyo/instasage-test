import Image from "next/image";
import AppDownload from "@/components/global/app-download";
import {companyLinks} from "@/utils/data";
import CompanyLinks from "@/components/landing/company-links";
import {insightLinks} from "@/utils/data";
import {contacts} from "@/utils/data";
import Contacts from "@/components/landing/contact-links";
import {socials} from "@/utils/data";
import Socials from "@/components/landing/socials";
import FooterLinks from "@/components/landing/footer-links";
import insightsLinks from "@/components/landing/insights-links";

const Footer = ()=>{
    return (
        <footer className={`bg-greyTint my-2 ml-1.5`}>
            <div className={`lg:flex pt-16 lg:pt-32 container px-20 md:max-w-7xl `}>
                <article className={`flex flex-col space-y-4 mx-auto max-w-sm`}>
                    <Image src={`/images/company-logo.svg`} alt={`company-logo`}
                           width={0}
                           height={0}
                           className={`w-36`}
                    loading={`lazy`}
                    />
                    <p className={`font-dmSans`}>
                        A platform that brings together brilliant minds, captivating books, and intellectual discussions.
                    </p>
                    <AppDownload/>
                </article>

                    <FooterLinks
                        articleClassName ={`article-className`}
                        headingClassName = {`heading-className`}
                        linksClassName ={`links-className`}
                        links= {companyLinks}
                        Component = {CompanyLinks}
                        title={`Company`}
                    />

                    <FooterLinks
                        articleClassName ={`article-className`}
                        headingClassName = {`heading-className`}
                        linksClassName ={`links-className`}
                        links= {insightLinks}
                        Component = {insightsLinks}
                        title={`Insights`}
                    />

                    <FooterLinks
                        articleClassName ={`article-className`}
                        headingClassName = {`heading-className`}
                        linksClassName ={`links-className`}
                        links= {contacts}
                        Component = {Contacts}
                        title={`Contacts`}
                    />
            </div>

                <div className={`container p-10 md:px-20 xl:px-32 md:max-w-7xl `}>
                    <div className={`bg-lineBorder h-0.5 mt-12`}></div>
                    <article className={`flex items-center justify-between mt-10 pb-16`}>
                        <h3 className={`text-[#646464] text-xs sm:text-sm md:mt-0 font-nunito`}>&copy; 2022 AlphaCipher, All Rights Reserved</h3>
                        <div className={`flex items-center space-x-2`}>
                            {socials.map((social)=>{
                                return (
                                    <Socials social={social}/>
                                )
                            })}
                        </div>
                    </article>
                </div>
        </footer>
    )
}
export default Footer