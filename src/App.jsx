import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardWrapper />} />
    </Routes>
  );
}

export default App;
