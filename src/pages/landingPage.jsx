import PresentationLandingPage from "../components/landingPage/textlanding/text";
import ImageLandingPage from "../components/landingPage/image/image";
import ButtonTryFree from "../components/landingPage/button/button";
import HeaderLanding from "../components/landingPage/HeaderLanding/HeaderLanding.jsx";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <HeaderLanding />
      <div className="landingPage">
        <div className="gauche">
          <PresentationLandingPage />
          <ButtonTryFree />
        </div>
        <ImageLandingPage />
      </div>
    </>
  );
}
