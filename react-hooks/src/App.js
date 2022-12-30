import React, { useState } from "react";

// function App() {
//     const [item, setItem] = useState(1);
//     const incrementItem = () => setItem((number) => number + 1);
//     const decrementItem = () => setItem(item - 1);

//     return (
//         <div className="App">
//             <h1>Hello {item}</h1>
//             <button onClick={incrementItem}>IncrementItem</button>
//             <button onClick={decrementItem}>DecrementItem</button>
//         </div>
//     );
// }

class App extends React.Component {
    state = {
        item: 1,
    };
    render() {
        const { item } = this.state;
        return (
            <div className="App">
                <h1>Hello {item}</h1>
                <button onClick={this.incrementItem}>IncrementItem</button>
                <button onClick={this.decrementItem}>DecrementItem</button>
            </div>
        );
    }
    incrementItem = () => {
        this.setState((state) => {
            return { item: state.item + 1 };
        });
    };
    decrementItem = () => {
        this.setState((state) => {
            return { item: state.item - 1 };
        });
    };
}

export default App;
