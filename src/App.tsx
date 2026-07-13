import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import NotFound from "./pages/NotFound";
import LandingPageService from "./pages/LandingPageService";
import DefaultLayout from "./layouts/DefaultLayout";
import DamarianBizLayout from "./layouts/DamarianBizLayout";

function App() {
  return (
    <BrowserRouter>
      {/* Opsional: Navigasi sederhana untuk mengetes rute */}

      {/* Setup routing deklaratif */}
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<DamarianBizLayout />}>
          <Route
            path="/landing-page-service"
            element={<LandingPageService />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
