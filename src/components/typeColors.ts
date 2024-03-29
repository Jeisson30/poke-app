interface TypeColors {
    [key: string]: string;
}

const typeColors: TypeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
};

function generateGradient(color1: string, color2: string): string {
    return `linear-gradient(to top, ${color1}, ${color2})`;
}

const typesWithGradients: string[][] = [
    ['grass', 'poison'],
    ['fire', 'flying'],
    ['bug', 'flying'],
    ['bug', 'poison'],
    ['normal', 'flying'],
    ['poison', 'ground'],
    ['normal', 'fairy'],
    ['poison', 'flying'],
    ['bug', 'grass'],
    ['water', 'fighting'],
    ['water', 'poison'],
    ['rock', 'ground'],
    ['water', 'psychic'],
    ['electric', 'steel'],
    ['water', 'ice'],
    ['ghost', 'poison'],
    ['grass', 'psychic'],
    ['ground', 'rock'],
    ['psychic', 'fairy'],
    ['ice', 'psychic'],
    ['water', 'flying'],
    ['rock', 'water'],
    ['rock', 'flying'],
    ['ice', 'flying'],
    ['electric', 'flying'],
    ['dragon', 'flying'],
    ['water', 'electric'],
    ['fairy', 'flying'],
    ['psychic', 'flying'],
    ['water', 'fairy'],
    ['grass', 'flying'],
    ['water', 'ground'],
    ['dark', 'flying'],
    ['normal', 'psychic'],
    ['bug', 'steel'],
    ['ground', 'flying'],
    ['steel', 'ground'],
    ['bug', 'rock'],
    ['bug', 'fighting'],
    ['dark', 'ice'],
    ['fire', 'rock'],
    ['ice', 'ground'],
    ['water', 'rock'],
    ['electric', 'ghost'],
    ['bug', 'ghost'],
    ['electric', 'poison'],
    ['fairy', 'fighting'],
    ['rock', 'steel'],
    ['normal', 'rock'],
    ['dark', 'psychic'],
    ['ghost', 'dark'],
    ['electric', 'normal'],
    ['electric', 'bug'],
    ['dark', 'steel'],
    ['dragon', 'electric'],
    ['fighting', 'steel'],
    ['fire', 'dark'],
    ['ground', 'dark'],
    ['ice', 'dragon'],
    ['poison', 'steel'],
    ['rock', 'dark'],
    ['rock', 'ghost'],
    ['fairy', 'psychic'],
    ['fighting', 'dark'],
    ['fairy', 'ground'],
    ['ghost', 'dragon'],
    ['ground', 'electric'],
    ['psychic', 'dark'],
    ['psychic', 'rock'],
    ['dark', 'fairy'],
    ['fighting', 'psychic'],
    ['rock', 'psychic'],
    ['rock', 'fighting'],
    ['ghost', 'fairy'],
    ['dragon', 'fairy'],
    ['dragon', 'ground'],
    ['dragon', 'psychic'],
    ['dragon', 'rock'],
    ['steel', 'flying'],
    ['dark', 'fire'],
    ['water', 'dragon'],
    ['psychic', 'grass'],
    ['fire', 'fighting'],
    ['water', 'grass'],
    ['grass', 'dark'],
    ['water', 'dark'],
    ['bug', 'water'],
    ['grass', 'fighting'],
    ['bug', 'ground'],
    ['dark', 'ghost'],
    ['steel', 'fairy'],
    ['steel', 'rock'],
    ['fire', 'ground'],
    ['ground', 'dragon'],
    ['rock', 'grass'],
    ['rock', 'bug'],
    ['ground', 'psychic'],
];

typesWithGradients.forEach(types => {
    const gradient = generateGradient(typeColors[types[0]], typeColors[types[1]]);
    typeColors[types.join('-')] = gradient;
});


export default typeColors;
