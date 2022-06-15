import React from "react";
import Header from "./Header";

function InicialPage() {
  return (
    <section>
      <Header />
      <div className="mainDivInicialPage">
        <div className="divIntroducao">
          <h4 className="p-ola">
            Olá, meu nome é
          </h4>
          <h1>
            JACKSON VIANA
            <br />
            FRONT-END DEVELOPER
          </h1>
        </div>
        <div className="divImg">
          img
        </div>
      </div>
    </section>
  );
};

export default InicialPage;
