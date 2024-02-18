const API_POKE_URL = 'https://pokeapi.co/api/v2/'

export const getDataPokemons = async (page: number): Promise<any> => {
    try {
        const response = await fetch(`${API_POKE_URL}/pokemon?limit=30&page=${page}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('error al traer los pokemon ', error)
    }
}