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
          <ul className="listMenuHeader title bold">
            <li>Accueil</li>
            <li>Films</li>
            <li>Séries</li>
            <li>Musiques</li>
            <li className="dropdown">Youtube ▼ 
              <ul className="dropdownMenu">
                <li className="dropdownMenuList">Vulgarisation</li>
                <li className="dropdownMenuList">Gaming</li>
                <li className="dropdownMenuList">Divertissement</li>
              </ul>
            </li>
            <li>Demo JV</li>
          </ul>
        </nav>
          <div className="loginSearch">
            <div className="searchBar">
              <span className="material-symbols-outlined bold">search</span>
            </div>
            <div className="login">
              <span className="material-symbols-outlined bold">person</span>
              <p className="loginName title bold">Connexion</p>
            </div>
          </div>
        <div className="burger">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>
    </Fragment>
  );
}