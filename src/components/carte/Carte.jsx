import "./Carte.css";
export default function Carte({ lienImage, titre }) {
  return (
    <div className="carte">
      <img src={lienImage} alt="image de la carte" />
      <p>{titre}</p>
    </div>
  );
}
