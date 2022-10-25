import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recomended from "./pages/Recomended";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recomended" element={<Recomended />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
