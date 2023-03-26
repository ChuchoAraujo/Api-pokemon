import React from "react";
import { Link } from "react-router-dom";
import pokemon from "../../img/pokemon.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar navegador">
			<Link to="/">
				<img src={pokemon} width={250}/>
			</Link>
			<div>
			</div>
		</nav>
	);
};
