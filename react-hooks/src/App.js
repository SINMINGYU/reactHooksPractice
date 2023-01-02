// import React, { useEffect, useState } from "react";

import content from "./content";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseEffectButton from "./UseEffectIntro";
import inputData from "./inputData";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";

function App() {
    // UseClick
    const sayHelloH1Title = () => console.log("hello h1 title");
    const h1Title = UseClick(sayHelloH1Title);

    // UseTitle
    const titleUpdater = UseTitle();
    setTimeout(() => titleUpdater("Home"), 5000);

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
            </div>
        </div>
    );
}

export default App;
