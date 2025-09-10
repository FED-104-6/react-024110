import { useState } from "react";
import "./exercise.css";

export default function Exercise() {
    const [count, setCount] = useState(0);

    function handleClick(isPlus) {
        if (isPlus) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <section>
            <h3>Your count</h3>
            <div>
                <button onClick={() => handleClick(false)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleClick(true)}>+</button>
            </div>
        </section>
    );
}
