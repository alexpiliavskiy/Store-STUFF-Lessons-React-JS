import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="STUFF" />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by{" "}
      <a
        href="https://www.linkedin.com/in/oleksandr-piliavskyi-2a6273239/"
        target="_blank"
        rel="noreferrer"
      >
        Pilyavskyi
      </a>
    </div>

    <div className={styles.socials}>
      <a
        href="https://www.instagram.com/alex.piliavskiy/"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </a>

      <a
        href="https://facebook.com/profile.php?id=100017331942449"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>

      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
);

export default Footer;
