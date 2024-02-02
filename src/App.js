import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./componets/MoviesList.js";
import MovieDetails from "./componets/MovieDetails.js";
import MainPage from "./pages/MainPage.js";
import NavBar from "./componets/NavBar.js";
// context
import { ThemeContext } from "./context/ThemeContextt.js";
import { UserContext } from "./context/UserContext.js";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  // useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {
      const res = await fetch("https://movies-fullstack-backend-p1u7.onrender.com/api/movies");
      const data = await res.json();
      console.log(data);
      // set the data to the state movies variable
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>


          {user ? (
            <>
              <NavBar />

              <Routes>
                <Route path="/about" element={<h3>About</h3>} />
                <Route
                  path="/movies"
                  element={<MoviesList movies={movies} />}
                />
                <Route path="/movies/:id" element={<MovieDetails />} />
              </Routes>
            </>
          ) : (
            <MainPage />
          )}


        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
