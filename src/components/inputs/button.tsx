import React from 'react';
import Svg from "@/components/global/svg";
import spinner from "@/svg/spinner";

export type ButtonProps = {
    title:string
    loading?:boolean
    className:string
    onClick?:()=>void
    disabled?:boolean
    icon?:any
}

const Button: React.FC<ButtonProps> = (props) => {
    const {title,disabled,loading,icon,className,onClick} = props;
    return (
        <>
            <button
                disabled={loading||disabled}
                onClick={onClick}
                type={"button"}
                className={`${className} btn`}
            >
                {loading&&(
                    <Svg icon={spinner} className="w-4"/>
                )}
                {icon&&(
                    <Svg icon={icon} className="w-3"/>
                )}
                {title}
            </button>
        </>
    );
};

export default Button;
