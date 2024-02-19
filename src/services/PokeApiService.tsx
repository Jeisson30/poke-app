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


export const fetchPokemonDetails = async (id: number): Promise<any> => {
    try {
        const response = await fetch(`${API_POKE_URL}/pokemon/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error :', error);
        throw new Error('Failed');
    }
};