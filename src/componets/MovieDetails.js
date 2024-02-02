import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    // func to fetch a movie by the id
    const fetchData = async () => {
        try {
            const res = await fetch(`https://movies-fullstack-backend-p1u7.onrender.com/api/movies/${params.id}`);
            const data = await res.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();

  }, [params.id]);

  return (
    <div>
      {movie && (
        <>
            <h3>Movie details</h3>
            <h4>{movie.title}</h4>
        </>
      )}
    </div>
  );
}

export default MovieDetails;