function Button({ onClick, children }) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            {children}
        </button>
    );
}

function AlertButton({ message, children }) {
    return <button onClick={() => alert(message)}>{children}</button>;
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return <button onClick={handlePlayClick}>Play "{movieName}"</button>;
}

function UploadButton() {
    return <button onClick={() => alert("Uploading!")}>Upload Image</button>;
}

// Try out some challenges 1
function LightSwitch() {
    function handleClick() {
        let computedStyle = getComputedStyle(document.body);

        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "black";
        }
    }

    return <button onClick={() => handleClick()}>Toggle the lights</button>;
}
// Try out some challenges 2
function ColorSwitch({ onChangeColor }) {
    return <button onClick={onChangeColor}>Change color</button>;
}

export { Button, AlertButton, PlayButton, UploadButton, LightSwitch, ColorSwitch };
