import React from "react";
import content from "./content";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";

function App() {
    const tabs = UseTabs(0, content);
    return (
        <div className="App">
            <h1>Hello</h1>
            <div>
                {tabs}
                <br />

                <UseInput
                    initialValue={"mr."}
                    validator={(value) => !value.includes("@")}
                />
            </div>
        </div>
    );
}

export default App;
