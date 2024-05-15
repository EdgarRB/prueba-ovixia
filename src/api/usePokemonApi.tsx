import { useQuery } from '@tanstack/react-query';
import { PokemonList, Pokemon } from '../model/Pokemon';
import FetchFunction from './fetch';

const url = 'https://pokeapi.co/api/v2/pokemon/';
const limit = '?limit=151';

const time = 1000 * 3600 * 24;

export const usePokemonListApi = () => {
  return useQuery({
    queryKey: ['pokemonList'],
    queryFn: async (): Promise<PokemonList> => FetchFunction(`${url}${limit}`),
    gcTime: time,
    staleTime: time,
  });
};

export const usePokemonDataApi = (name: string) => {
  return useQuery({
    queryKey: ['pokemonData', name],
    queryFn: async (): Promise<Pokemon> => FetchFunction(`${url}${name}`),
    gcTime: time,
    staleTime: time,
  });
};
