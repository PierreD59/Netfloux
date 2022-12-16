import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function HeaderLanding() {
  return (
    <Fragment>
      {" "}
      <header>
        <div className="logo">
          <Link to={"/"}><img src="img/logo.svg" alt="logo du site internet" /></Link>
        </div>
          <div className="login">
            <span class="material-symbols-outlined bold">person</span>
            <p className="title loginName bold">Connexion</p>
          </div>
      </header>
    </Fragment>
  );
}
