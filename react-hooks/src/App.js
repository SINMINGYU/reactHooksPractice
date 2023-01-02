// import React, { useEffect, useState } from "react";
import content from "./content";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseEffectButton from "./UseEffectIntro";
import inputData from "./inputData";
import UseTitle from "./UseTitle";

function App() {
    const titleUpdater = UseTitle();
    setTimeout(() => titleUpdater("Home"), 5000);

    return (
        <div className="App">
            <h1>🪝 Practice React Hooks 🪝</h1>
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
