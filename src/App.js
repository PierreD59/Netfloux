import AfficherPage from "./pages/landingPage";
import Header from "./components/HeaderLanding/HeaderLanding";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <HomePage /> */}
        <AfficherPage/>
      </div>
    </>
  );
}

export default App;