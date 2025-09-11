import styled from "@emotion/styled";
import { Slider, TextField, IconButton, Tooltip, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function DIY() {
    const [progress, setProgress] = useState(30);
    return (
        <Background>
            {/* DIY21 */}
            <SlideBar value={progress} onChange={(e, newValue) => setProgress(newValue)} />
            <DeleteBtn />
            <TwoTextFields />

            {/* DIY22 */}
            <Tooltip title="Edit">
                <IconButton color="warning">
                    <EditIcon />
                </IconButton>
                <Button variant="contained" color="warning">Edit</Button>
            </Tooltip>
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

function DeleteBtn() {
    return (
        <Button variant="contained" color="error">
            DELETE
        </Button>
    );
}

function TwoTextFields() {
    return (
        <InputWrap>
            <TextField label="Name" color="primary" variant="outlined"></TextField>
            <TextField label="Address" color="primary" variant="standard"></TextField>
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
