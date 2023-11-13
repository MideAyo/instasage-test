import React from "react";
import Image from "next/image";
import Svg from "@/components/global/svg";
import spinner from "@/svg/spinner";

export type PreloaderProps = {
    loading:boolean
}

const Preloader: React.FC<PreloaderProps> = ({loading}) => {
    return (
        <>
            {loading&&(
                <div className="fixed z-2000 inset-0 bg-modal font-sans">
                    <div className="w-full h-full flex-center px-5">
                        <Svg icon={spinner} className="w-8 text"/>
                    </div>
                </div>
            )}
        </>
    );
};

export default Preloader;
