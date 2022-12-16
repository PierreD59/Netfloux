import Categorie from "../components/homePage/categorie/Categorie";
import MonCarousel from "../components/homePage/carousel/Carousel";
import Pub from "../components/homePage/pub/Pub";
import Header from "../components/homePage/Header/Header";

export default function HomePage() {
  return (
    <>
      <Header/>
      <MonCarousel />
      <Categorie titre="Contenu qui pourrait vous plaire" />
      <Pub  />
      <Categorie titre="Films pour vous" />
      <Categorie titre="Séries pour vous" />
      <Pub  />
      <Categorie titre="Musiques pour vous" />
      <Categorie titre="Youtube pour vous" />
      <Pub  />
      <Categorie titre="Démos de jeux vidéos disponibles" />
      <Pub  />
    </>
  );
}
