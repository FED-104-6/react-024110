import { useState } from "react";
import Question from "../components/material/question";
import "./02_material.css";
import Score from "../components/material/score";

export default function Material() {
    // main
    // maintain
    // current question
    // score, high score
    // whether the game is over
    // initialize
    // a list of question, each containing an image and the correct first letter
    // implement
    // handle user's input
    // update the score
    // moving next question

    // 세 질문 끝나면 game over, final score 보여주기
    // 각 라운드마다 사진 바꾸고
    // 경신하면 high score 변경하고

    const [gameIng, setGameIng] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const questions = [
        {
            name: "hat",
            img: "/assets/questions/hat.png",
        },
        {
            name: "sneakers",
            img: "/assets/questions/sneakers.png",
        },
        {
            name: "dress",
            img: "/assets/questions/dress.png",
        },
    ];

    const [answer, setAnswer] = useState("");
    const handleChildInput = (value) => {
        setAnswer(value);
        const isCorrect = value.toLocaleLowerCase() == questions[currentIdx].name;
        if (isCorrect) {
            const newScore = currentScore + 10;
            setCurrentScore(newScore);
            if (currentIdx < 2) {
                setCurrentIdx(currentIdx + 1);
            } else {
                setGameIng(!gameIng);
            }
            if (newScore > highScore) {
                setHighScore(newScore);
            }
        } else {
            alert("faild. try one more time");
            setCurrentScore(currentScore - 15);
        }
    };

    const handleRetry = () => {
        setGameIng(true);
        setCurrentIdx(0);
        setCurrentScore(0);
    };

    return (
        <div className="game-material">
            <div id="game-over" className={gameIng ? "close" : ""}>
                <h2>🎮 Game Over 🕹️</h2>
                <div>
                    <h4>Your score: {currentScore}</h4>
                    <h4>Your best record: {highScore}</h4>
                </div>
                <button onClick={handleRetry}>Retry</button>
            </div>
            <div id="game-ing" className={gameIng ? "" : "close"}>
                <h3>With which letter does it start</h3>
                <Question onSubmitValue={handleChildInput} currentIdx={currentIdx} currentImg={questions[currentIdx].img} />
                <Score currentScore={currentScore} highScore={highScore} />
            </div>
        </div>
    );
}
