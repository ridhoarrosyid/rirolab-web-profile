import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Opsional: Navigasi sederhana untuk mengetes rute */}
      <Navbar />

      {/* Setup routing deklaratif */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
