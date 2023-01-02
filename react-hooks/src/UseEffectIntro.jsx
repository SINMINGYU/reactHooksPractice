import React, { useEffect, useState } from "react";

function UseEffectButton() {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, []);
    const numberButton = () => {
        return setNumber(number + 1);
    };
    const aNumberButton = () => {
        return setAnumber(aNumber + 1);
    };

    return (
        <div>
            <button onClick={numberButton}>{number}</button>
            <button onClick={aNumberButton}>{aNumber}</button>
        </div>
    );
}

export default UseEffectButton;
