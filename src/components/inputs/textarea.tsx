import React, {useEffect} from 'react';

export type TextareaProps = {
    setValue:(val:any)=>void
    value:any
    className?:string
    cs?:string
    placeholder?:string
    label?:string
    save?:boolean
    required?:boolean
    maxLength?:number
    error?:any
}

const Textarea: React.FC<TextareaProps> = (props) => {

    const {setValue,value,className,error,cs,label,placeholder,maxLength,required,save} = props;

    useEffect(()=>{
        if (save){
            // const val = sessionStorage.getItem(name) || "";
            // setValue(val)
        }
    },[]);

    const onChange=( {target}:any ) => {
        setValue(target.value);
        if (save){
            // sessionStorage.setItem(name,target.value);
        }
    };

    return (
        <div className={cs}>
            {label&&(
                <label htmlFor="" className="text-gray-800 text-sm">{label}</label>
            )}
            <div className="border rounded mt-1">
                <textarea
                    onChange={onChange}
                    maxLength={maxLength}
                    required={required}
                    value={value}
                    className={`input resize-none h-20 text ${className}`}
                    placeholder={placeholder}
                />
            </div>
            <p className="text-xs text-danger pl-2 pt-1">{error}</p>
        </div>
    );
};

export default Textarea;
