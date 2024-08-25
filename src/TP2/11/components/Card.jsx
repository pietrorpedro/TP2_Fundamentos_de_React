export default function Card(props) {
  return (
    <div className="card11">
      <a href={props.link} target="_blank">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </a>
    </div>
  );
}
