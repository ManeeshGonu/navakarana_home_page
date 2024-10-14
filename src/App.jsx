import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <main className="py-16 max-w-7xl mx-auto px-3"> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
}

export default App;
