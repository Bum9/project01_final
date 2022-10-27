import React, { useEffect, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/common/HeaderContainer";
import Movie1 from "./movie1";
import Moviep from "./Moviep";



// Moviedb API 변수에 담기
const FEATURED_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=5ac98f6f7b17843411c28fee7fc3b003&language=ko-KR";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=5ac98f6f7b17843411c28fee7fc3b003&language=ko-KR&query=";

function Moviesp(user, onLogout) {
  // movies Array 생성
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  // 영화정보 API호출
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // 검색 API호출
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  //상단 배너 홈아이콘
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <h1 className="/home">
              Movie<span className="view">View</span>
            </h1>
          </Link>
          <ul>
            <li>
              <Link className="page1" to="/upcoming">
                <MdLocalMovies />
                개봉예정작
              </Link>
            </li>
            <Movie1 />
          </ul>
        </div>
        {/* 검색창 */}
        <form onSubmit={handleOnSubmit}>
          <div className="msearch">
            <input
              className="search"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
            <HeaderContainer />
          </div>
        </form>
      </header>
      {/* 영화정보 */}
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Moviep key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default Moviesp;
