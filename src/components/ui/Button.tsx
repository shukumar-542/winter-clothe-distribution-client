import { ReactNode } from "react";


type propsItem ={
    children : ReactNode,
    className ?  : string
}
const Button = ({children, className} : propsItem) => {
    return (
        <div className={` px-4 py-2 font-semibold shadow-md rounded-md uppercase cursor-pointer hover:bg-slate-200 transition-all ${className}`}>
           {children} 
        </div>
    );
};

export default Button;