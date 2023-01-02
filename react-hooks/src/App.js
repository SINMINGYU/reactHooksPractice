import React, { useEffect, useRef, useState } from "react";

import content from "./content";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseEffectButton from "./UseEffectIntro";
import inputData from "./inputData";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";
import useConfirm from "./UseConfirm";
import usePreventLeave from "./UsePreventLeave";
import useBeforeLeave from "./UseBeforeLeave";
import useFadeIn from "./UseFadeIn";
import useNetwork from "./UseNetwork";
import useScroll from "./UseScroll";

function App() {
    // useScroll
    const { y } = useScroll();

    // useNetwork
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    // useFadeIn
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    // useBeforeLeave
    const begForLife = () => console.log("Pls don't leave");
    useBeforeLeave(begForLife);

    // usePreventLeave
    const { enablePrevent, disablePrevent } = usePreventLeave();

    // useClick
    const sayHelloH1Title = () => console.log("hello h1 title");
    const h1Title = UseClick(sayHelloH1Title);

    // useTitle
    const titleUpdater = UseTitle();
    setTimeout(() => titleUpdater("Home"), 5000);

    //useConfirm
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

    return (
        <div className="App">
            <h3>{onLine ? "Online" : "Offline"}</h3>
            <h1 ref={(h1Title, fadeInH1.ref)} style={fadeInH1.style}>
                🪝 Practice React Hooks 🪝
            </h1>
            <p {...fadeInP}>fadeIn text~! 😝</p>
            <div>
                <UseTabs initialTab={0} allTabs={content} />
                <br />
                <UseInput
                    initialValue={inputData.initialValue}
                    validator={inputData.validator}
                />
                <br />
                <UseEffectButton />
                <br />
                <button onClick={confirmDelete}>Delete the world</button>
                <br />
                <button onClick={enablePrevent}>Protect</button>
                <button onClick={disablePrevent}>Unprotect</button>
            </div>
            <div style={{ height: "1000vh" }}>
                <h1
                    style={{
                        position: "fixed",
                        color: y > 100 ? "red" : "blue",
                    }}>
                    I Can Scroll!!
                </h1>
            </div>
        </div>
    );
}

export default App;
