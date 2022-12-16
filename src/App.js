import Header from "./components/homePage/Header/Header";
// import HeaderLanding from "./components/landingPage/HeaderLanding/HeaderLanding.jsx";
import HomePage from "./pages/HomePage";
import "./App.css";
// import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <>
      <div className="App">
        {/* <HeaderLanding /> */}
        <Header />
        <HomePage />
        {/* <LandingPage /> */}
      </div>
    </>
  );
}
