import { useState, useEffect, useRef } from "react";

export function UseRef() {
    const [inputValue, setInputValue] = useState("input");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <section>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </section>
    );
}