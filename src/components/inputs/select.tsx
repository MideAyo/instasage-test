import React from 'react';

export type SelectProps = {
    placeholder?:string
    value?:string
    setValue:(value:string)=>void
    options:{label:string, value:string}[]
    className?:string
    cs?:string
    label?:string
    error?:string
    disabled?:boolean
}

const Select: React.FC<SelectProps> = ({placeholder,disabled,value,error,cs,label,setValue,options,className}) => {
    return (
        <div className={cs}>
            {label&&(
                <label htmlFor="" className="text-gray-800 text-sm">{label}</label>
            )}
            <select
                value={value}
                className={`${error?"border-danger":""} ${className} border  py-3 text px-4 w-full mt-1 rounded-md appearance-none bg bg-[url('/svg/down.svg')] bg-right bg-no-repeat `}
                placeholder={placeholder}
                onChange={(e)=>setValue(e.target.value)}
                disabled={disabled}
            >
                <option key={"option"} value={""}>{label}</option>
                {options.map(({value,label},i)=>(
                    <option key={"option"+i} value={value}>{label}</option>
                ))}
            </select>
            <p className="text-xs text-danger pl-2 pt-1">{error}</p>
        </div>
    );
};

export default Select;
