import { useState } from "react";

export default function Conditional() {
    // state
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div>
            <h3>My Favorite Food List</h3>
            <button onClick={() => setIsOpened(!isOpened)}>show</button>
            {/* conditional */}
            <FoodList isOpened={isOpened}></FoodList>
        </div>
    );
}

function FoodList({ isOpened }) {
    // list 
    const myFood = ["Tteokbokki", "Sweet potato fries", "Spicy Chicken"];

    if (isOpened) {
        return (
            <ul>
                {myFood.map((food, index) => (
                    <li key={index}>
                        {food}
                    </li>
                ))}
            </ul>
        );
    }
}
