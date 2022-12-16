import PresentationLandingPage from "../components/landingPage/textlanding/text";
import ImageLandingPage from "../components/landingPage/image/image";
import ButtonTryFree from "../components/landingPage/button/button";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="gauche">
        <PresentationLandingPage />
        <ButtonTryFree />
      </div>
      <ImageLandingPage />
    </div>
  );
}
