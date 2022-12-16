import Categorie from "../components/homePage/categorie/Categorie";
import MyApp from "../components/homePage/carousel/Carousel";
import Pub from "../components/homePage/pub/Pub";
export default function HomePage() {
  return (
    <>
      <MyApp />
      <Categorie titre="Contenu qui pourrait vous plaire" />
      <Pub/>
      <Categorie titre="Films pour vous" />
      <Categorie titre="Séries pour vous" />
      <Pub/>
      <Categorie titre="Musiques pour vous" />
      <Categorie titre="Youtube pour vous" />
      <Pub/>
      <Categorie titre="Démos de jeux vidéos disponibles" />
      <Pub/>
    </>
  );
}
