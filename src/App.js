import AfficherPage from "./pages/landingPage";
import Header from "./components/landingPage/HeaderLanding/HeaderLanding.jsx";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HomePage />
        {/*  <AfficherPage />*/}
      </div>
    </>
  );
}

export default App;
