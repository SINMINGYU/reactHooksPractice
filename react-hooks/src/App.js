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
import useFullscreen from "./useFullscreen";
import useNotification from "./UseNotification";
import useAxios from "./UseAxios";

function App() {
    // useAxios
    const { loading, data, error, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json",
    });
    console.log(
        `Loading: ${loading}\nData: ${JSON.stringify(data)}\nError: ${error}`
    );

    // useNotification
    const triggerNotif = useNotification("Can i steal your kimchi?", {
        body: "I love kimchi dont you?",
    });

    // useFullscreen
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);

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
            <h3>{onLine ? "Online 🟢" : "Offline 🔴"}</h3>
            <h1 ref={(h1Title, fadeInH1.ref)} style={fadeInH1.style}>
                🪝 Practice React Hooks 🪝
            </h1>
            <p {...fadeInP}>fadeIn text~! 😝</p>

            <UseTabs initialTab={0} allTabs={content} />
            <br />
            <UseInput
                initialValue={inputData.initialValue}
                validator={inputData.validator}
            />
            <br />
            <UseEffectButton />
            <br />
            <div>
                <button onClick={confirmDelete}>Delete the world</button>
            </div>
            <br />
            <div>
                <button onClick={enablePrevent}>Protect</button>
                <button onClick={disablePrevent}>Unprotect</button>
            </div>
            <br />
            <div>
                <div ref={element}>
                    <img
                        src="https://i.ibb.co/R6RwNxx/grape.jpg"
                        alt="grape"
                        width="250"
                    />
                    <button onClick={exitFull}>Exit fullscreen</button>
                </div>
                <button onClick={triggerFull}>Make fullscreen!</button>
            </div>
            <br />
            <div>
                <button onClick={triggerNotif}>Hello~!</button>
            </div>
            <br />
            <div>
                <h3>{data && data.status}</h3>
                <h4>{loading && "Loading"}</h4>
                <button onClick={refetch}>Refetch</button>
            </div>

            <div style={{ height: "1000vh" }}>
                <h1
                    style={{
                        position: "flex",
                        color: y > 100 ? "red" : "blue",
                    }}>
                    I Can Scroll!!
                </h1>
            </div>
        </div>
    );
}

export default App;
