const API_POKE_URL = 'https://pokeapi.co/api/v2'

export const getDataPokemons = async (page: number): Promise<any> => {
    try {
        const offset = (page - 1) * 30;
        const response = await fetch(`${API_POKE_URL}/pokemon?limit=30&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
        throw new Error('Failed');
    }
};

export const fetchPokemonDetails = async (pokemonId: number): Promise<any> => {
    try {
        const response = await fetch(`${API_POKE_URL}/pokemon/${pokemonId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error :', error);
        throw new Error('Failed');
    }
};

export const fetchPokemonLocations = async (pokemonId: number): Promise<any> => {
    try {
        const response = await fetch(`${API_POKE_URL}/location/${pokemonId}`);
        const data = await response.json();
        if (data.region && data.areas) {
            const regionName = data.region.name;
            const areas = data.areas.map((area: any) => area.name);
            return { regionName, areas };
        } else {
            console.log('No se encontró región o áreas para este Pokémon');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed location');
    }
};
