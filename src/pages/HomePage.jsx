import Categorie from "../layouts/categorie/Categorie";
export default function HomePage() {
  return (
    <>
      <Categorie titreCategorie="Films pour vous" />
      <Categorie titreCategorie="Séries pour vous" />
      <Categorie titreCategorie="Musiques pour vous" />
      <Categorie titreCategorie="Youtube pour vous" />
      <Categorie titreCategorie="Démos de jeux vidéos disponibles" />
    </>
  );
}
