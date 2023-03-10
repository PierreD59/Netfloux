import Carte from "../carte/Carte";
import "./Categorie.css";

/**
 * Possède un titre de catégorie, des cartes avec leurs propriétés.
 * @param {*} props le titre de la catégorie
 * @returns la div Catégorie qui contient tout
 */
export default function Categorie(props) {
  return (
    <>
      <div className="Categorie">
        <div className="titre">
          <h2 className="bold">{props.titre}</h2>
          <h4> Voir plus </h4>
        </div>
        <div className="flow">
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Joker "
            type="Film "
            sousCategorie="- Thriller psychologie "
            limiteAge="- Déconseillé -12 ans"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Viking "
            type="Série "
            sousCategorie="- Drame historique, Action "
            limiteAge="- Déconseillé -12 ans"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Time Time"
            type="Musique "
            auteur="- Anne Onyme"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Top 1 Pacman 99 "
            auteur="Squizye "
            nbVu="35K vues "
            dateSorti="- Depuis 1 mois"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Tirage carte pokemon "
            auteur="Kakaméto "
            jeu="Pokemon trading card game"
            tag1="Pokémon"
            tag2="Français"
          />
        </div>
      </div>
    </>
  );
}
