import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Loto6Comp from "./components/loto6/Loto6";
import Loto7Comp from "./components/loto7/Loto7";
import MiniLotoComp from "./components/miniloto/MiniLoto";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/loto6" element={<Loto6Comp />} />
                <Route path="/loto7" element={<Loto7Comp />} />
                <Route path="/miniloto" element={<MiniLotoComp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
