import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { MOVIES } from "./mocks/movies";
import MoviePoster from "./components/MoviePoster";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { GlobalStyles } from "./styled/GlobalStyles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Movies from "./pages/Movies";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = () => {
      setMovies(MOVIES.results);
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    display: "flex-start",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {movies.map((movie) => (
                    <MoviePoster key={movie.id} movie={movie} />
                  ))}
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />{" "}
            <Route path="/movies" element={<Movies movies={movies} />} />{" "}
            <Route path="/movies/now-playing" element={<Search />} />
            <Route path="/movies/popular" element={<Search />} />
            <Route path="/movies/top-rated" element={<Search />} />
            <Route path="/movies/up-coming" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
