import React, { useEffect, useState } from 'react';
import { fetchPokemonStats } from '../services/PokeApiService';
import { PieChart, BarChart, Pie, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const PokemonStats: React.FC = () => {
    const [pokemonStats, setPokemonStats] = useState<{ name: string; value: number }[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const stats = await fetchPokemonStats();
                const statsArray = Object.entries(stats).map(([name, value]) => ({ name, value }));
                console.log('tipos: ', JSON.stringify(statsArray));

                setPokemonStats(statsArray);
                setIsLoading(false);
            } catch (error) {
                setError('Error pokemon stats');
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Pokemon Stats</h2>
            <h3>Bar Chart</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart width={900} height={400} data={pokemonStats} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
            <h3>Pie Chart</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart width={400} height={300}>
                    <Pie data={pokemonStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default PokemonStats;
