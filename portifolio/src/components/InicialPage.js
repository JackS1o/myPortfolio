import React from "react";
import Header from "./Header";

function InicialPage() {
  return (
    <section>
      <Header />
      <div className="mainDivInicialPage">
        <div className="divIntroducao">
          <div className="typingdiv">
            <h4 className="h4-ola">
              Olá, meu nome é
            </h4>
          </div>
          <h1 className="h1Name">
            JACKSON VIANA
          </h1>
          <h1 className="h1Name">
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
