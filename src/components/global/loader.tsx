import React, {useState,useEffect} from 'react';
import Image from "next/image";
import Svg from "@/components/global/svg";
import spinner from "@/svg/spinner";

export type LoaderProps = {
    loading:boolean
}

const Loader: React.FC<LoaderProps> = ({loading}) => {
    return (
        <>
            {loading&&(
                <div className="flex-center py-4">
                    <Svg icon={spinner} className="w-8 text"/>
                </div>
            )}
        </>
    );
};

export default Loader;
