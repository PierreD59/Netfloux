import Categorie from "../components/homePage/categorie/Categorie";
import MyApp from "../components/homePage/carousel/Carousel";
export default function HomePage() {
  return (
    <>
      <MyApp />
      <Categorie titre="Contenu qui pourrait vous plaire" />
      <Categorie titre="Films pour vous" />
      <Categorie titre="Séries pour vous" />
      <Categorie titre="Musiques pour vous" />
      <Categorie titre="Youtube pour vous" />
      <Categorie titre="Démos de jeux vidéos disponibles" />
    </>
  );
}
