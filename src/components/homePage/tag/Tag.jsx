import "./Tag.css";
export default function Tag(props) {
  return (
    <>
      <div className="tag">
        <p>{props.text}</p>
      </div>
    </>
  );
}
