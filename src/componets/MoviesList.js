import MovieItem from "./MovieItem";
import Spinner from "react-bootstrap/Spinner";
//
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MoviesList({ movies }) {

  const themeCtx = useContext(ThemeContext);
  const {theme} = themeCtx;

  return (
    // <div style={{backgroundColor: theme === 'light' ? '#fff': '#000'}}>
    <div className={theme === 'light' ? 'lightMode': 'darkMode'}>
      <div>
        {movies.length >= 1 ? (
          movies.map((movie) => <MovieItem movie={movie} key={movie._id} />)
        ) : (
          <Spinner animation="grow" variant="info" role="status" as="span">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}

export default MoviesList;