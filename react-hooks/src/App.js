import React from "react";
import UseInput from "./UseInput";

function App() {
    // const maxLen = (value) => !value.includes("@");
    // const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <div>
                <UseInput
                    initialValue={"mr."}
                    validator={(value) => !value.includes("@")}
                />
            </div>
            {/* <input
                placeholder="Name"
                value={name.value}
                onChange={name.onChange}
            /> */}
        </div>
    );
}

// class App extends React.Component {
//     state = {
//         item: 1,
//     };
//     render() {
//         const { item } = this.state;
//         return (
//             <div className="App">
//                 <h1>Hello {item}</h1>
//                 <button onClick={this.incrementItem}>IncrementItem</button>
//                 <button onClick={this.decrementItem}>DecrementItem</button>
//             </div>
//         );
//     }
//     incrementItem = () => {
//         this.setState((state) => {
//             return { item: state.item + 1 };
//         });
//     };
//     decrementItem = () => {
//         this.setState((state) => {
//             return { item: state.item - 1 };
//         });
//     };
// }

export default App;
