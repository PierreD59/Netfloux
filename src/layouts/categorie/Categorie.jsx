import Carte from "../../components/carte/Carte";
import "./Categorie.css";

export default function Categorie(props) {
  return (
    <>
      <div className="Categorie">
        <h1>{props.titreCategorie}</h1>
        <div className="flow">
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Conception de film"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Conception de film"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Conception de film"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Conception de film"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Conception de film"
          />
          <Carte
            lienImage="https://media.istockphoto.com/id/1191001701/fr/photo/pop-corn-et-clapperboard.jpg?s=612x612&w=0&k=20&c=AHQ7hOMdCMRfAya18h3rznNEflqmFS3Q90UznAbNfzM="
            titre="Conception de film"
          />
        </div>
      </div>
    </>
  );
}