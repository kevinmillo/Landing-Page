import React from "react";

import { Navbar } from "./navbar.jsx";

import Jumbotron from "./jumbotron.jsx";

import Foto from "./card.jsx";

//create your first component
const Home = () => {
	const textos = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
		"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	];
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row pt-2">
					{textos.map((item, index) => (
						<div className="col-3 p-2" key={index}>
							<Foto texto={item} />
						</div>
					))}
				</div>
			</div>
			<div className="footer bg-dark text-white text-center">
				<p>Realizado por Kevin Bullor</p>
			</div>
		</>
	);
};

export default Home;
