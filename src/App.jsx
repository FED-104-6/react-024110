import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tictactoe from "./pages/01_Tictactoe";
import Material from "./pages/02_material";
import Count from "./pages/03_count";
import Response from "./pages/04_response";
import Conditional from "./pages/05_contitional_list_state";
import DIY0910 from "./pages/06_DIY0910";
import DIY0911 from "./pages/07_DIY0911";

function App() {
    return (
        <>
            <Header />
            <div id="common-back">
                {/* ⭐ React Router */}
                <Routes>
                    <Route path="/" element={<Tictactoe />} />
                    <Route path="/tic-tac-toe" element={<Tictactoe />} />
                    <Route path="/material" element={<Material />} />
                    <Route path="/count" element={<Count />} />
                    <Route path="/response" element={<Response />} />
                    <Route path="/conditional" element={<Conditional />} />
                    <Route path="/diy-0910" element={<DIY0910 />} />
                    <Route path="/diy-0911" element={<DIY0911 />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
