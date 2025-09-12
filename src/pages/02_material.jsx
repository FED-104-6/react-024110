import { createContext, useContext, useEffect, useState } from "react";
import "./02_material.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const GameContext = createContext();

export default function Material() {
    const [gameIng, setGameIng] = useState(true); // 시작 유무
    const [currentIdx, setCurrentIdx] = useState(0); // 문제 넘기기
    const [currentScore, setCurrentScore] = useState(0); // 현재 점수
    const [highScore, setHighScore] = useState(0); // 최고기록
    const [correctCnt, setCorrectCnt] = useState(0); // 맞은 문제수

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

    const handleChildInput = (value) => {
        const isCorrect = value.toLocaleLowerCase() == questions[currentIdx].name[0]; // split('') 안 해도 되네?

        if (isCorrect) {
            alert("딩동댕");
            // const newScore = currentScore + 10;
            setCorrectCnt(correctCnt + 1);
            setCurrentScore(currentScore + 10);

            // useEffect로 localStorage에 저장할 예정
            // if (newScore > highScore) {
            //     setHighScore(newScore);
            // }
        } else {
            alert("땡!");
            setCurrentScore(currentScore - 15);
        }

        if (currentIdx < questions.length - 1) {
            // setCurrentIdx(currentIdx + 1);
            setCurrentIdx((prev) => prev + 1); // prev라는 이전값 가져오기 장치
        } else {
            setGameIng(false);
        }
    };

    const handleRetry = () => {
        setGameIng(true);
        setCurrentIdx(0);
        setCurrentScore(0);
        setCorrectCnt(0);
    };

    // useEffect: highScore 관리 (side effect)
    useEffect(() => {
        if (currentScore > highScore) {
            setHighScore(currentScore);
            localStorage.setItem("highScore", currentScore); // 저장
        }
    }, [currentScore, highScore]);

    return (
        <GameContext.Provider value={{ correctCnt, currentScore, highScore, handleChildInput }}>
            <div id="game-material">
                {/* conditional 이렇게 하면 되는군 */}
                {!gameIng ? (
                    <Card>
                        <CardContent id="game-over">
                            <h2>🎮 Game Over 🕹️</h2>
                            <div>
                                <Typography>Correct Number: {correctCnt}/3</Typography>
                                <Typography>Your score: {currentScore}</Typography>
                                <Typography>Your best record: {highScore}</Typography>
                            </div>
                            <Button variant="contained" onClick={handleRetry}>
                                Retry
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div id="game-ing">
                        <Typography variant="h5">With which letter does it start?</Typography>
                        <Question currentIdx={currentIdx} currentImg={questions[currentIdx].img} />
                        <Score />
                    </div>
                )}
            </div>
        </GameContext.Provider>
    );
}

// Question Component (props lifting)
function Question({ currentIdx, currentImg }) {
    const { handleChildInput } = useContext(GameContext);
    const [inputValue, setInputValue] = useState("");

    return (
        <Card>
            <CardContent className="question">
                <h3>Question number {currentIdx + 1}</h3>
                <img src={currentImg} alt={`question-${currentIdx}`} />
                <div className="input-wrap">
                    <input type="text" maxLength={1} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleChildInput(inputValue);
                            setInputValue(""); // reset
                        }}
                    >
                        Play
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

// Score Component (useContext, listing)
function Score() {
    const { correctCnt, currentScore, highScore } = useContext(GameContext);

    const stats = [
        { label: "Correct Answers", value: correctCnt },
        { label: "Current Score", value: currentScore },
        { label: "High Score", value: highScore },
    ];

    return (
        <ul className="score">
            {stats.map((stat, index) => (
                <li key={stat.label}>
                    {index === 2 ? "✨" : ""}
                    {stat.label}: {index === 0 ? `${stat.value}/3` : stat.value}
                </li>
            ))}
        </ul>
    );
}
