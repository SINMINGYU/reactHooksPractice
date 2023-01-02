import React, { useEffect, useState } from "react";

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

function App() {
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
            <h1 ref={h1Title}>🪝 Practice React Hooks 🪝</h1>
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
        </div>
    );
}

export default App;
