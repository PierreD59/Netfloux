import HomePage from "./pages/HomePage";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <div className="App"></div>
    </>
  );
}
