import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const API_TOKEN = "";

  const fetchMovies = async (category) => {
    let endpoint;
    switch (category) {
      case "now-playing":
        endpoint = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`;
        break;
      case "popular":
        endpoint = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
        break;
      case "top-rated":
        endpoint = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1`;
        break;
      case "up-coming":
        endpoint = `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`;
        break;
      default:
        return;
    }

    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("영화 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    fetchMovies(path);
  }, [location.pathname]);

  const handleCategoryClick = (category) => {
    navigate(`/movies/${category}`);
  };

  return (
    <div>
      <h2>카테고리 페이지</h2>
      <div>
        <button onClick={() => handleCategoryClick("now-playing")}>
          현재 상영중
        </button>
        <button onClick={() => handleCategoryClick("popular")}>
          인기 있는
        </button>
        <button onClick={() => handleCategoryClick("top-rated")}>
          높은 평가
        </button>
        <button onClick={() => handleCategoryClick("up-coming")}>
          개봉 예정
        </button>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "10px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "130px", height: "205px" }}
            />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
