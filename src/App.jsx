import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CalculadoraPage from "./pages/CalculadoraPage/CalculadoraPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<CalculadoraPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
