import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Header from "../components/Header";

function Detail(props) {
  const [details, setDetails] = useState([]);
  const KEY = "f863d304fec4821c4080c676b54afde6";
  const URL = "https://api.themoviedb.org/3/movie/";
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`${URL}${id}?api_key=${KEY}&language=ko-KR`)
    ).json();
    console.log(json);
    setDetails(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Header />
      <Details
        id={details.id}
        title={details.title}
        backdrop_path={details.backdrop_path}
        poster_path={details.poster_path}
        release_date={details.release_date}
        vote_average={details.vote_average}
        genres={details.genres}
        overview={details.overview}
      />
    </div>
  );
}

export default Detail;
