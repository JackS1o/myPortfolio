import Header from "./Header";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../style.css";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];

function Projects() {
	const items = [(
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
	), (
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
	), (
		<div className="body">
			<div className="container">
				<div className="card">
					<div className="face face1">
						<div className="elements">
							<img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTT9KRxd4crd4PZNImSYnpA4zkPS770N7dYw&usqp=CAU" alt="" />
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
		</div><div className="App">
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