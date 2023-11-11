import React, {useState,useEffect} from 'react';
import Button from "../inputs/button";
import {retry} from "@/svg/icons";

export type ErrorViewProps = {
    onClick:()=>void
    error?:string
}

const ErrorView: React.FC<ErrorViewProps> = ({onClick,error}) => {
    return (
        <div>
            {!!error&&(
                <div>
                    <p className="text-center text-base text-danger">{error}</p>
                    <div className="flex-center">
                        <Button
                            icon={retry}
                            title={"Retry"}
                            className={"mt-4 w-40 btn-primary"}
                            onClick={onClick}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ErrorView;
