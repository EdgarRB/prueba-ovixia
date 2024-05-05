import { useQuery } from '@tanstack/react-query';
import { Species } from '../model/Species';
import FetchFunction from './fetch';

const url = 'https://pokeapi.co/api/v2/pokemon-species/';

const useSpeciesDataApi = (name: string) => {
  return useQuery({
    queryKey: ['SpeciesData', name],
    queryFn: async (): Promise<Species> => FetchFunction(`${url}${name}`),
  });
};

export default useSpeciesDataApi;
