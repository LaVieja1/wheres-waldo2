import React from "react";
import githubLogo from "../assets/images/GitHub-Mark-Light-32px.png";

export default function Info({
  setInGame,
  setInInfo,
  setInHome,
  setInLeaderboard,
}) {
  setInLeaderboard(false);
  setInHome(false);
  setInGame(false);
  setInInfo(true);

  return (
    <div className="info-container">
      <div className="about-p">
        Este proyecto fue realizado por {" "}
        <a
          href="https://github.com/LaVieja1"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link-a"
        >
          <img class="github-logo" src={githubLogo} alt="github"></img>
          Santi Cano
        </a>{" "}
        por The Odin Project
      </div>
      <ul className="info-ul">
        <li className="info-li">
          Construido con React
        </li>
        <li className="info-li">
          Back end usado: Firebase
        </li>
        <li className="info-li">Clasificación para los 8 niveles</li>
        <li className="info-li">
          Nombre con malas palabras censurados
        </li>
      </ul>
      <p className="about-p">
        Imagenes por:
        <a
          href="https://www.artstation.com/pierreroussel"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link-a"
        >
          {" "}
          Pierre Roussel
        </a>
      </p>
      <ul className="info-ul">
        <li className="info-li">
          <a
            href="https://www.artstation.com/artwork/oOVVlJ"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link-a"
          >
            Artstation
          </a>
        </li>
        <li className="info-li">
          <a
            href="https://www.etsy.com/shop/Angerinet"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link-a"
          >
            Etsy shop
          </a>
        </li>
        <li className="info-li">
          <a
            href="https://www.instagram.com/angerinet/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link-a"
          >
            Seguir en Instagram @angerinet
          </a>
        </li>
      </ul>
    </div>
  );
}