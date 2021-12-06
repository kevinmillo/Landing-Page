import React from "react";
import PropTypes from "prop-types";

const Foto = ({ texto }) => {
	return (
		<div className="card h-100">
			<img
				src="https://picsum.photos/200/150"
				className="card-img-top"
				alt="..."
			/>
			<div className="contenido card-body d-flex flex-column justify-content-between">
				<div>
					<h5 className="card-title">Card title</h5>
					<p className="card-text">{texto}</p>
				</div>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
Foto.propTypes = {
	texto: PropTypes.string
};
export default Foto;
