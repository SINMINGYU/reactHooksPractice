import { useState } from "react";

const UseInput = ({ initialValue, validator }) => {
    console.log(validator);
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;
        // const validator = (value) => {
        //     return !value.includes("@");
        // };
        if (typeof validator == "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    // return { value, onChange };
    return (
        <div>
            <input placeholder="Name" value={value} onChange={onChange} />
        </div>
    );
};

export default UseInput;
