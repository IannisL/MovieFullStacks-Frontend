import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MovieItem({ movie }) {
  const { title, poster, _id } = movie;

  return (
    <Card
      style={{ width: "14rem", margin: "10px", backgroundColor: "#221f1f" }}
    >
      <Link to={`/movies/${_id}`} style={{ color: "#f5f5f1" }}>
        <Card.Title>{title}</Card.Title>

        {poster ? (
          <Card.Img src={poster} alt={title} />
        ) : (
          <Card.Img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        )}
      </Link>
    </Card>
  );
}

export default MovieItem;