import React from "react";
import { WithChildren } from "@/types";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";

interface LayoutProps extends WithChildren {
    navChange: string;
    link: string
}

const Layout: React.FC<LayoutProps> = ({ children, navChange, link }) => {
    return (
        <div className={`flex`} >
            <Sidebar/>
            <div className={`w-[120%] sm:w-[100%] md:w-[80%] xl:w-[86%]`}>
                <Navbar navChange={navChange} link={link}/>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
