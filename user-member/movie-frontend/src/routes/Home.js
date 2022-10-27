import React, { useEffect, useState } from "react";
import { EffectCoverflow, Mousewheel, Navigation, Scrollbar } from "swiper";
import "swiper/bundle";
import "swiper/components/effect-coverflow";
import "swiper/components/mousewheel";
import "swiper/components/navigation";
import "swiper/components/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import Header from "../components/Header";
import Movie from "../components/Movie";
const Home = () => {
  const KEY = "f863d304fec4821c4080c676b54afde6";
  const URL = "https://api.themoviedb.org/3/movie/";

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`${URL}upcoming?api_key=${KEY}&language=ko-KR`)
    ).json();
    setMovies(json.results);
    console.log(json.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 10, // 회전각도
          stretch: 0,
          depth: 150, // 깊이감도
          modifier: 3,
          slideShadows: false,
        }}
        navigation={true}
        mousewheel={true}
        scrollbar={false}
        modules={[EffectCoverflow, Navigation, Mousewheel, Scrollbar]}
        className="mySwiper"
      >
        <div className="container">
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Movie
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                vote={movie.vote_average}
                release={movie.release_date}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Home;
