import Header from "./Header";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../style.css";
import wallet from "../images/wallet.png";
import trivia from "../images/trivia.png";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];

function Projects() {
	const items = [(
		<a rel='noopener noreferrer' href="https://wallet-project-rho.vercel.app/" target="_blank" >
			<div className="body">
				<div className="container">
					<div className="card">
						<div className="face face1">
							<div className="elements">
								<img className="img" src={ wallet } alt="" />
								<h3 className="projectName">Wallet</h3>
							</div>
						</div>
					</div>
					<div className="face face2">
						<div className="elements">
							<p className="description">Aplicação feita para controlar os gastos do usuário em diversas moedas. O valor é convertido para BRL e também é possível editar algum gasto depois de inserido na tabela.</p>
							<p className="description">Clique e veja a aplicação.</p>
						</div>
					</div>
				</div>
			</div>
		</a>
	), (
		<a rel='noopener noreferrer' href="https://online-store-coral.vercel.app/" target="_blank">
			<div className="body">
				<div className="container">
					<div className="card">
						<div className="face face1">
							<div className="elements">
								<img className="img" src="https://www.xion.global/wp-content/uploads/2020/08/Asset-3Page-Icon-1.png" alt="" />
								<h3 className="projectName">Online Store</h3>
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
		</a>
	), (
		<a rel='noopener noreferrer' href="https://trivia-jacks1o.vercel.app/" target="_blank">
		<div className="body">
			<div className="container">
				<div className="card">
					<div className="face face1">
						<div className="elements">
							<img className="img" src={ trivia } alt="" />
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
		</a>
	), (
		<div className="body">
			<div className="container">
				<div className="card">
					<div className="face face1">
						<div className="elements">
							<img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsrLf4yFoi0pfpwKG28w6qWd-CQcp0je5tA&usqp=CAU" alt="" />
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
	)];

	// const addItem = () => {
	//   const nextItem = Math.max(1, items.length + 1);
	//   setItems([...items, nextItem]);
	// };

	// const removeItem = () => {
	//   const endRange = Math.max(0, items.length - 1);
	//   setItems(items.slice(0, endRange));
	// };

	return (
		<><div>
			<Header />
		</div>
			<div className="App">
				{/* <div className="controls-wrapper">
      <button onClick={removeItem}>Remove Item</button>
      <button onClick={addItem}>Add Item</button>
    </div> */}
				<div className="carousel-wrapper">
					<Carousel breakPoints={breakPoints}>
						{items.map((item) => (
							<Item key={item}>{item}</Item>
						))}
					</Carousel>
				</div>
			</div></>
	);
}

export default Projects;