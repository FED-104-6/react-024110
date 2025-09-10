import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Material from "./pages/material";
import Tictactoe from "./pages/Tictactoe";
import Exercise from "./pages/exercise";

function App() {
    return (
        <>
            <Header />
            <div id="common-back">
                <Routes>
                    <Route path="/" element={<Tictactoe />} />
                    <Route path="/tic-tac-toe" element={<Tictactoe />} />
                    <Route path="/material" element={<Material />} />
                    <Route path="/exercise" element={<Exercise />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
