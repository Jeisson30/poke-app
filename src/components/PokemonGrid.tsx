import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { getDataPokemons } from '../services/PokeApiService';
import '../styles/PokemonGrid.css'
interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: { type: { name: string } }[];
    locations?: any[];
    region?: { name: string };
}

interface PokemonGridProps {
    selectedType: string | null;
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ selectedType }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        fetchPokemonsData();
        console.log('seleccion tipo: ', selectedType);

    }, [page, selectedType]);

    const fetchPokemonsData = async () => {
        setIsLoading(true);
        try {
            const nextPage = page > 1 ? page : 1;

            const data = await getDataPokemons(nextPage);
            if (data.results.length === 0) {
                setHasMore(false);
                return;
            }

            let newPokemonList = data.results.map((pokemon: any, index: number) => ({
                id: (nextPage - 1) * 30 + index + 1,
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(nextPage - 1) * 30 + index + 1}.png`,
                types: []
            }));

            // Filtrar por tipo seleccionado
            console.log('Tipo seleccionado:', selectedType);
            if (selectedType) {
                newPokemonList = newPokemonList.filter((pokemon: { types: { type: { name: string; }; }[]; }) =>
                    pokemon.types.some((type: { type: { name: string; }; }) => type.type.name === selectedType)
                );
                console.log('filtrado tipo: ', newPokemonList);

            }

            if (nextPage === 1) {
                setPokemonList(newPokemonList);
            } else {
                setPokemonList(prevList => [...prevList, ...newPokemonList]);
            }
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        } finally {
            setIsLoading(false);
        }
    };


    const handleScroll = () => {
        if (!isLoading && hasMore && (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, hasMore]);

    return (
        <div>
            <h1>POKEMON LIST</h1>
            <div className="pokemon-grid">
                {pokemonList.map((pokemon, index) => (
                    <PokemonCard key={`${pokemon.id}-${index}`} pokemon={pokemon} />
                ))}

                {isLoading && <div>Loading...</div>}
            </div>
        </div>

    );
};

export default PokemonGrid;
