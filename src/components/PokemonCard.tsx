import React, { useEffect, useState } from 'react';
import '../styles/pokemonCard.css'
import typeColors from './typeColors';
import { fetchPokemonDetails } from '../services/PokeApiService';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: { type: { name: string } }[];
}

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const [details, setDetails] = useState<any>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await fetchPokemonDetails(pokemon.id);
                setDetails(data);
            } catch (error) {
                console.error('Error: ', error);
            }
        };

        fetchDetails();
    }, [pokemon.id]);

    if (!details) {
        return (
            <div className="pokemon-card">
                <img src={pokemon.image} alt={pokemon.name} />
                <div className="pokemon-info">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    const typeNames = details.types.map((type: { type: { name: string; }; }) => type.type.name.toLowerCase());

    // Generar el degradado para el fondo de la tarjeta de acuerdo al tipo del Pokemon
    let gradientBackground = '';
    if (typeNames.length === 1) {
        gradientBackground = typeColors[typeNames[0]];
    } else if (typeNames.length === 2) {
        gradientBackground = typeColors[`${typeNames[0]}-${typeNames[1]}`];
    }

    return (
        <div className="pokemon-card" style={{ background: gradientBackground }} >
            <div className="pokemon-info">
                <h2 className='name-pokemon'>{pokemon.name}</h2>
                <p className='data-pokemon'>Height: {details.height}</p>
                <p className='data-pokemon'>Weight: {details.weight}</p>
                <p className='data-pokemon'>Abilities: {details.abilities.map((ability: any) => ability.ability.name).join(', ')}</p>
                <div className="types-container">
                    {details.types.map((type: { type: { name: string } }, index: number) => {
                        const typeName = type.type.name && typeof type.type.name === 'string' ? type.type.name.toLowerCase() : '';
                        return (
                            <div key={index} className="type-card" style={{ backgroundColor: typeColors[typeName] }}>
                                {type.type.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            <img className='img-pokemon' src={pokemon.image} alt={pokemon.name} />
        </div>
    );
};


export default PokemonCard;
