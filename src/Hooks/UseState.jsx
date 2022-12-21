import { useState } from "react";
import React from "react";

// This is a custom hook that can be used to manage state
// It is a wrapper around the useState hook that counts the number of times the state is updated

export function Usestate () {
    const [count, setCount] = useState(0); // innitialize useState hook with a default value of 0
    return (
        <section>
            <p className="btn">You have clicked {count} times</p>
            <button className="btn-render" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <span>{count}</span>
            <button className="btn-render" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </section>

    )
}