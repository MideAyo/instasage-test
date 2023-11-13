import React, {useState, useEffect, ReactElement} from 'react';
import {ModalProps} from "@/types";

type Props = {
    children: ReactElement|ReactElement[]
}

const Modal: React.FC<Props&ModalProps> = (props) => {
    const {children, modal, setModal} = props;

    useEffect(()=>{
        if (modal){
            document.body.classList.add("overflow-hidden")
        }else {
            document.body.classList.remove("overflow-hidden")
        }
    },[modal]);

    return (
        <>
            {modal&&(
                <div className="fixed inset-0 bg-modal z-2000 flex-center px-2">
                    <div className="container bg rounded-lg max-w-lg p-5 lg:p-10 z-10">
                        {children}
                    </div>
                    <div className="absolute inset-0" onClick={()=>setModal(false)}/>
                </div>
            )}
        </>
    );
};

export default Modal;
