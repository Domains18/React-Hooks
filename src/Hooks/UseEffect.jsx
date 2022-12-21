// useEffect hook 

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// we will have two state function and two useEffect function
// This is a custom hook that can be used to manage state 

export function Useeffect (){
     // iinitialize a state with the window width
    const  [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
     // initialize useState hook with a default value of 0
    const [count, setCount] = useState(10);
    // initialize useEffect hook with a timer function
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setCount( prevCount => prevCount - 1);
        }, 1000);

        if (count === 0) {
            setCount(10);
            
        }
    });
    // return the count value after the timer function has run (after 1 second)
    return (
        <section>
            <span className="btn-btn-home">Timer Resets After 10 seconds</span>
            <p>Timer:<span className="btn-render">{count}</span></p>
            <span className="btn-btn-home">Resize The Screen to see the screen width</span>
            <p>Width:<span className="btn-render">{windowWidth}</span></p>
        </section>
    )
}