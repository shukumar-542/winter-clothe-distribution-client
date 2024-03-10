import { ReactNode } from "react";


type propsItem = {
    children ? : ReactNode,
    className ?: string
}
const Container = ({children , className} : propsItem) => {
    return (
        <div className={`max-w-7xl mx-auto ${className}`}>
           {children} 
        </div>
    );
};

export default Container;