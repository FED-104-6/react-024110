import styled from "@emotion/styled";
import { Slider, TextField, IconButton, Tooltip, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useRef, useState } from "react";

export default function DIY() {
    const [inputName, setInputName] = useState("");
    const [inputAddress, setInputAddress] = useState("");
    const [progress, setProgress] = useState(30);
    const inputRef = useRef(null);

    // Hooks DIY9
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Hooks DIY10
    const [count, setCount] = useState(0);

    return (
        <Background>
            {/* DIY21 */}
            {/* ⭐ Lifting State Up */}
            <SlideBar value={progress} onChange={(e, newValue) => setProgress(newValue)} />
            <DeleteBtn
                onClick={() => {
                    setInputAddress(""), setInputName("");
                }}
            />
            <TwoTextFields
                inputRef={inputRef}
                inputName={inputName}
                inputAddress={inputAddress}
                setInputName={setInputName}
                setInputAddress={setInputAddress}
            />

            {/* DIY22 */}
            <Tooltip title="Edit">
                <IconButton color="warning">
                    <EditIcon />
                </IconButton>
                <Button
                    onClick={() => {
                        inputRef.current.focus();
                    }}
                    variant="contained"
                    color="warning"
                >
                    Edit
                </Button>
            </Tooltip>

            {/* Hooks DIY 9 */}
            <p>Second counter: {counter}</p>

            {/* Hooks DIY 10 */}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment count</button>
        </Background>
    );
}

function SlideBar({ value, onChange }) {
    return (
        <div style={{ width: 300 }}>
            <p>Progress: {value}%</p>
            <Slider value={value} onChange={onChange} aria-labelledby="progress-slider" />
        </div>
    );
}

function DeleteBtn({ onClick }) {
    return (
        <Button variant="contained" color="error" onClick={onClick}>
            DELETE
        </Button>
    );
}

function TwoTextFields({ inputRef, inputName, inputAddress, setInputName, setInputAddress }) {
    return (
        <InputWrap>
            <TextField
                inputRef={inputRef}
                label="Name"
                color="primary"
                value={inputName}
                variant="outlined"
                onChange={(e) => {
                    setInputName(e.target.value);
                }}
            />
            <TextField
                label="Address"
                color="primary"
                value={inputAddress}
                variant="standard"
                onChange={(e) => setInputAddress(e.target.value)}
            />
        </InputWrap>
    );
}

const Background = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;
const InputWrap = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 5px;
    gap: 20px;
`;
