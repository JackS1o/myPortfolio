import React from "react";
import Header from "./Header";

function Projects() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="body">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="elements">
                <img className="img" src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/12/naruto-1200x900-2.jpg" alt="" />
                <h3 className="projectName">Nome do projeto</h3>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="elements">
              <p className="description">Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="elements">
                <img className="img" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" alt="" />
                <h3 className="projectName">Nome do projeto</h3>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="elements">
              <p className="description">Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
