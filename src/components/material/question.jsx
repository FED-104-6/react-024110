// display current question with image and input field
// pass ths input to the App component for validation

import { useState } from "react";

export default function Question({ currentIdx, currentImg, onSubmitValue }) {
    const [inputValue, setInputValue] = useState("");
    const handleClick = () => {
        onSubmitValue(inputValue); // 버튼 누를 때 부모에 값 전달
        setInputValue("");
    };

    return (
        <div className="question">
            <h3>Question number {currentIdx + 1}</h3>
            <img src={currentImg} alt="" />
            <div className="input-wrap">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleClick}>Play</button>
            </div>
        </div>
    );
}
