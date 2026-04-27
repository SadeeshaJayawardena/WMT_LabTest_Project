import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddItemPage from "./pages/AddItemPage.jsx";
import EditItemPage from "./pages/EditItemPage.jsx";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;