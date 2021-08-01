import { writable } from 'svelte/store';

export const pokemons = writable([]);

const getPoke = async (num) => {
	const payload = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`);
	const data = await payload.json();
	const result = data.results.map((item, idx) => ({ ...item, id: idx + 1 }));

	pokemons.set(result);
};

getPoke(150);
