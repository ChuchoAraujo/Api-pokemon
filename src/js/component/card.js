import React, { useState, useEffect } from 'react';

import "../../styles/home.css";

export const Card = ({ pokemon }) => {




    return (
        <div className='container-fluid'>
            <div className="row text-center ">
                {
                    pokemon.map((element, i) => (
                        <div
                            key={i} className='col positionCard'>
                            <img 
                                width="200"
                            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (i + 1) + '.png'} alt={pokemon.name} />
                            <div>
                                <p>{element.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
