import { useEffect, useRef } from "react";

const UseClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        // if (element.current) {
        //     element.current.addEventListenr("click", onClick);
        // }
        if (typeof onClick !== "function") {
            return;
        }
        let elementRefValue = null;

        if (element.current) {
            element.current.addEventListener("click", onClick);
            elementRefValue = element.current;
        }
        return () => {
            if (elementRefValue) {
                elementRefValue.removeEventListener("click", onClick);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return typeof onClick !== "function" ? undefined : element;
};

export default UseClick;
