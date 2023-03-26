import React, { useState, useEffect } from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from '../component/card';

export const Home = () => {

	// Paso 1 - Crear las variables de cambio de estado
	// Paso 2 - LLamar a la API para obtender la informacion
	// Paso 3 - Crear el html para renderizar los datos a traves de un componente nuevo
	// Pso 4 - Pasar las props al nuevo componente
	// Paso 5 - Recorrer el objeto para pintar la informacion

	// OPCION 1 -- fecth y .then

	const [pokemon, setPokemon] = useState([])

	useEffect(()=> {
		fetch('https://pokeapi.co/api/v2/pokemon/')
			.then(response => response.json())
			.then(result=> {
				console.log(result)
				setPokemon(result.results)
			})
			.catch(error => console.log(error))
	}, [])

	// OPCION 2 -- async y await
	// useEffect(() => {
	// 	const fetchPokemonList = async () => {
	// 		const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
	// 			console.log(response)
	// 		const data = await response.json()
	// 			console.log(data)
	// 		setPokemon(data.results)
	// 			console.log(data.results)
	// 	}
	// 	fetchPokemonList();
	// }, [])


	return (
		<div>
			<div className="row text-center">
			<Card pokemon={pokemon}/>
			</div>
		</div>
	)
};
