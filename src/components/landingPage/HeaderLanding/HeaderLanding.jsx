import { Fragment } from "react";

export default function HeaderLanding() {
  return (
    <Fragment>
      {" "}
      <header>
        <div className="logo">
          <img src="img/logo.svg" alt="logo du site internet" />
        </div>
          <div className="login">
            <span class="material-symbols-outlined bold">person</span>
            <p className="title loginName bold">Connexion</p>
          </div>
      </header>
    </Fragment>
  );
}
