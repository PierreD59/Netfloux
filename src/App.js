import AfficherPage from "./pages/landingPage";
import HeaderLanding from "./components/landingPage/HeaderLanding/HeaderLanding.jsx";
import Header from "./components/homePage/Header/Header";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        {/* <HeaderLanding /> */}
        <Header />
        <HomePage />
        {/* <AfficherPage /> */}
      </div>
    </>
  );
}

export default App;
