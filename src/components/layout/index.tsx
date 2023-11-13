import React, {useState} from "react";
import {WithChildren} from "@/types";
import HtmlHead from "@/components/layout/html-head";
import {Nunito, DM_Sans, Inter } from "next/font/google";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

type LayoutProps = {
    title?:string
}

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dmSans",
});

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});



const Layout: React.FC<LayoutProps&WithChildren> = (props) => {
    const {title, children} = props;

    return (
      <div className={`${nunito.variable} ${dmSans.variable} ${inter.variable}`}>
        <HtmlHead title={title || ""} />
        <div className="flex flex-col relative min-h-screen ">
          <Navbar/>
          <div className="flex-1">{children}</div>
          <Footer/>
        </div>
      </div>
    );
};

export default Layout;
