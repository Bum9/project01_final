import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/common/HeaderContainer";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header1}>
      <div className={styles.logo}>
        <Link to="/">
          <h1 className={styles.home}>
            Movie<span className={styles.view}>View</span>
          </h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/upcoming">
            <MdLocalMovies />
            개봉예정작
          </Link>
        </li>
      </ul>
      {/* <Movie1 /> */}
      <span className={styles.logButton}>
        <HeaderContainer />
      </span>
    </header>
  );
}

export default Header;
