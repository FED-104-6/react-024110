import { useState } from "react";
import "./03_count.css";

export default function Count() {
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
