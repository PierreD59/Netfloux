import { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      {" "}
      <header>
        <div className="logo">
          <img src="img/logo.svg" alt="logo du site internet" />
        </div>
        <nav className="menuHeader">
          <ul className="listMenuHeader">
            <li>Accueil</li>
            <li>Films</li>
            <li>Séries</li>
            <li>Musiques</li>
            <li>Youtube</li>
            <li>Demo JV</li>
          </ul>
        </nav>
        <div className="login&Search">
          <div className="searchBar"></div>
          <div className="login">
            <span class="material-symbols-outlined">person</span>
            <p className="loginName bold">Connexion</p>
          </div>
        </div>
        <div className="burger"></div>
      </header>
    </Fragment>
  );
}
