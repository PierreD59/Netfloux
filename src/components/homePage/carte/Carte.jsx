import "./Carte.css";
export default function Carte(props) {
  return (
    <div className="carte">
      <img src={props.lienImage} alt="image de la carte" />
      <p>{props.titre}</p>
    </div>
  );
}
