import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    console.log(element);
    return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
