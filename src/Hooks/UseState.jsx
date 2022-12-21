import { useState } from "react";
import React from "react";

// This is a custom hook that can be used to manage state
// It is a wrapper around the useState hook that counts the number of times the state is updated

export function Usestate () {
    const [count, setCount] = useState(0); // innitialize useState hook with a default value of 0
    return (
        <section>
            <p className="btn">You have clicked {count} times</p> {/*  display the number of times the state has been updated */}
            <button className="btn-render" onClick={() => setCount(count + 1)}>+</button> {/* increment the state
            <span>{count}</span> // display the current state */}
            <button className="btn-render" onClick={() => setCount(count - 1)}>-</button> {/* decrement the state */}
        </section>

    )
}