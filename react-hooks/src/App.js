import React from "react";
import content from "./content";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";

const inputData = {
    initialValue: "mr.",
    validator: (value) => !value.includes("@"),
};

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
            </div>
        </div>
    );
}

export default App;
