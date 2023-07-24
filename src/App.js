import "./App.css";
import Colors from "./components/Colors";
import Gradient from "./components/Gradient";
import ColorShades from "./components/ColorShades";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <title>Pickr</title>
        <meta
          name="Pickr"
          content="Colour Generator, Gradient Generator, Color Palette"
        />
        <link rel="icon" href="/favicon.ico" />
      </div>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Colors />} />
            <Route path="/gradient" element={<Gradient />} />
            <Route path="/color-shades" element={<ColorShades />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
