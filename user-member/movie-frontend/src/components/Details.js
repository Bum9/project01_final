import React, { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import styles from "./Details.module.css";

function Details({
  title,
  backdrop_path,
  poster_path,
  release_date,
  vote_average,
  overview,
  genres,
}) {
  const [like, setLike] = useState(false);
  const likeChanger = () => {
    const myLike = localStorage.setItem(title, like);
    setLike(!like);
  };
  const view = localStorage.getItem(title);

  const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -8px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

  const Box = styled.div`
    animation: ${bounce} 1s ease;
  `;

  return (
    <div className={styles.container}>
      <div
        className={styles.detail__top}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      </div>

      <div className={styles.detail__bottom}>
        <div className={styles.box}>
          <h2 className={styles.title}>{title} &nbsp;</h2>
          <div className={styles.like} onClick={likeChanger}>
            <Box>{view == "false" ? <BsFillHeartFill /> : <BsHeart />}</Box>
          </div>
        </div>
        <br />
        <span className={styles.vote_average}>
          개봉일:{release_date} &nbsp; &nbsp; &nbsp; 평점:{vote_average}
        </span>
        <ul className={styles.ul}>
          {genres && genres.map((g) => <li key={g.id}> {g.name} </li>)}
        </ul>
        <p className={styles.overview}>{overview}</p>
      </div>
    </div>
  );
}

export default Details;
