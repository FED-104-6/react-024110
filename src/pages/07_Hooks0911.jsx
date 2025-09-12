import { Button } from "@mui/material";
import { createContext, useContext, useState } from "react";

// 1. createContext
// null - 어차피 provider에서 전해줄 거임
const userContext = createContext(null);

export default function DIY0911() {
    return (
        <div>
            <UserProvider>
                {/* DIY11 */}
                <h3>User Data</h3>
                <UserDisplay />

                {/* DIY12 */}
                <h3>Edit Information</h3>
                <UserEdit />
            </UserProvider>
        </div>
    );
}

// 2. make provider
function UserProvider({ children }) {
    const [user, setUser] = useState({ name: "John Doe", email: "johndoe@example.com", age: 25 });
    // value 필수
    // 구조분해할당 - 겹중괄호 필수
    return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
}

function UserDisplay() {
    const { user } = useContext(userContext);
    return (
        <div>
            <p>name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}

function UserEdit() {
    const { setUser } = useContext(userContext);
    const [newUser, setNewUser] = useState({ name: null, email: null, age: null });

    // 새로고침하면 돌아옴 --> provider에서 기본값을 설정했기 때문
    // 이것까지 다루려면 localstorage 써야 됨 근데 귀찮자나
    function handleEditForm() {
        setUser(newUser);
    }

    return (
        // ⭐ Forms in React
        <form action="">
            <input
                type="text"
                placeholder="Enter name"
                onChange={
                    (e) => setNewUser({ ...newUser, name: e.target.value }) // 올바른 객체 업데이트
                }
            />
            <input
                type="text"
                placeholder="Enter email"
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
                type="number"
                placeholder="Enter age"
                onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            />
            <Button onClick={handleEditForm} variant="contained" color="warning">
                Edit
            </Button>
        </form>
    );
}
