import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 👈 required CSS

import Login from "./layouts/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

      </Routes>

      {/* ✅ Global Toast Container (always available) */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" // or "light" / "dark"
      />
    </Router>
  );
}
