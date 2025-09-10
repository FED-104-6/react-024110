import { AlertButton, Button, ColorSwitch, PlayButton, UploadButton, LightSwitch } from "../components/response/button";
import "./04_response.css";

export default function Response() {
    return (
        <div id="button-wrap">
            <AlertButton message="Playing!">AlertButton</AlertButton>
            <PlayButton movieName={"Lion King"}>PlayButton</PlayButton>
            <UploadButton />
            <Toolbar onPlayMovie={() => alert("Playing!")} onUploadImage={() => alert("Uploading!")} />
            <Signup />

            {/* Try out some challenges 1 & 2 */}
            <LightSwitch />
            <ColorSwitch
                onChangeColor={() => {
                    getComputedStyle(document.body).backgroundColor === "rgba(0, 0, 0, 0)"
                        ? (document.body.style.background = "white")
                        : (document.body.style.background = "black");
                }}
            />
        </div>
    );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie}>Play Movie</Button>
            <Button onClick={onUploadImage}>Upload Image</Button>
        </div>
    );

    // return (
    //     <div
    //         className="Toolbar"
    //         onClick={() => {
    //             alert("You clicked on the toolbar!");
    //         }}
    //     >
    //         <button onClick={() => alert("Playing!")}>Play Movie</button>
    //         <button onClick={() => alert("Uploading!")}>Upload Image</button>
    //     </div>
    // );
}

function Signup() {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert("Submitting!");
            }}
        >
            <input />
            <button>Send</button>
        </form>
    );
}
