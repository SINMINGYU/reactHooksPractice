import React, { useEffect, useState } from "react";

function UseEffectButton() {
    const sayHelloButton = () => console.log("hello Number Button");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHelloButton, [number, aNumber]);
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
