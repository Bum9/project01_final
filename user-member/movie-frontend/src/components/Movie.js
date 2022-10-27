import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ poster_path, title, vote, id }) {
  return (
    <div>
      <div id={styles.movie}>
        <Link to={`/movie/${id}`}>
          <div className={styles.img__container}>
            <img
              className={styles.movie__poster}
              src={`https://image.tmdb.org/t/p/w400${poster_path}`}
              alt={title}
            />
          </div>
        </Link>
        <h3 className={styles.movie__title}>{title}</h3>
        <span className={styles.movie__average}>{vote}</span>
      </div>
    </div>
  );
}

export default Movie;
