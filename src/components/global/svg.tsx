import React from "react";
import colors, {ColorProps} from "../../utils/colors";

export type SvgProps = {
    icon:any
    className?:string
}

const Svg: React.FC<SvgProps> = ({icon,className}) => {
    return(
        <div
            dangerouslySetInnerHTML={{
                __html:icon
            }}
            className={className}
        />
    )
};

export default Svg;
