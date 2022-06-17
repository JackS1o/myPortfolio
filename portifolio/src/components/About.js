import React, { useRef } from "react";
import Header from "./Header";

function About() {
	const carrousel = useRef(null);
	const left = () => {
		console.log(carrousel.current.offsetWidth);
		carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
	}

	const right = () => {
		console.log(carrousel.current.offsetWidth);
		carrousel.current.scrollLeft += carrousel.current.offsetWidth;
	}

	return (
		<div>
			<Header />
			<div className="body">
				<div className="carrousel" ref={carrousel}>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
					<div className="item">
						<div className="img">
							<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000" alt="" />
						</div>
					</div>
				</div>
				<div className="buttons">
					<button type="button" onClick={left}>A</button>
					<button type="button" onClick={right}>B</button>
				</div>
			</div>
		</div>
	);
};

export default About;
