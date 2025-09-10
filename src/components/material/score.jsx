// display current score, high score

export default function Score({ currentScore, highScore }) {
    return (
        <div className='score'>
            <h3>correct number</h3> {/* 이거 왜 있는 거임 근데 */}
            <p>score: {currentScore}</p>
            <p>✨ high score: {highScore}</p>
        </div>
    );
}
