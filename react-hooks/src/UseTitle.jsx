import { useEffect, useState } from "react";

const UseTitle = () => {
    const [title, setTitle] = useState("Loading...");
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

export default UseTitle;
