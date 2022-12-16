import Tag from "../tag/Tag";
import "./Carte.css";

/**
 * affiche les informations pour les cartes en fonctions des props recu.
 * @param {*} props
 * @param {string} titre
 * @param {string} type
 * @param {string} auteur
 * @param {string} sousCategorie
 * @param {string} limiteAge
 * @param {string} nbVu
 * @param {string} dateSorti
 * @param {string} jeu
 * @param {string} tag
 * @returns la carte détaillé
 */
export default function Carte(props) {
  return (
    <div className="carte">
      <img src={props.lienImage} alt="image de la carte" />
      <h3>{props.titre}</h3>
      <p>
        {<span>props.type</span> !== "" ? props.type : ""}
        {props.auteur !== "" ? props.auteur : ""}
        {props.sousCategorie !== "" ? props.sousCategorie : ""}
        {props.limiteAge !== "" ? props.limiteAge : ""}
      </p>
      <p>
        {props.nbVu !== "" ? props.nbVu : ""}
        {props.dateSorti !== "" ? props.dateSorti : ""}
      </p>
      <p>{props.jeu !== "" ? props.jeu : ""}</p>
      <div className="tags">
        {props.tag1 !== "" ? <Tag text={props.tag1} /> : ""}
        {props.tag2 !== "" ? <Tag text={props.tag2} /> : ""}
      </div>
    </div>
  );
}
