import React from "react";
import "./App.css";
import { useState } from 'react';

function Hook_ControlledButtonState() {
    // Initialize the state variable 'count' with useState
    const [count, setCount] = useState(0);

    const  handleIncrement = () => {
        setCount(count + 1);
    };    

    
    // ClickHandle function
    const ClickHandle = () => {
        alert(`Button clicked! Current count is: ${count}`);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Hook_ControlledButtonState;


