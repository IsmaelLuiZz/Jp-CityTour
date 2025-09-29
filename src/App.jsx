import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Historia from "./pages/Historia";
import Praias from "./pages/Praias";
import Zoologico from "./pages/Zoologico";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Historia />} />
          <Route path="/praias" element={<Praias />} />
          <Route path="/zoologico" element={<Zoologico />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
