// import React, { useEffect, useState } from "react";
import content from "./content";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseEffectButton from "./UseEffectIntro";
import inputData from "./inputData";

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
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
