import "./App.css";
import {useEffect} from "react";
import Colors from "./components/Colors";
import Gradient from "./components/Gradient";
import ColorShades from "./components/ColorShades";
import ColorPalette from "./components/ColorPalette";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      
      event.returnValue = "";
    });

    return () => {
      window.removeEventListener("beforeunload", (event) => {
        event.preventDefault();
        event.returnValue = "";
      });
    };
  }, []);
  
  return (
    <div>
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Colors />} />
            <Route path="/gradient" element={<Gradient />} />
            <Route path="/color-shades" element={<ColorShades />} />
            <Route path="/color-palette" element={<ColorPalette />} />
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
