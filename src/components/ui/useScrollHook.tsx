import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollHook = () => {
    const componentRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target : componentRef,
        offset : ['0 1' , '1.2 1']
    })
    const scaleValue = useTransform(scrollYProgress , [0 , 1],[0.9 , 1])
    const style = {
        scale : scaleValue
    }
    return {style, componentRef};
};

export default useScrollHook;