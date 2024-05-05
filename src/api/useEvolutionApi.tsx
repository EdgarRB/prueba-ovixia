import { useQuery } from '@tanstack/react-query';
import FetchFunction from './fetch';
import { Evolution } from '../model/Evolution';

const useEvolutionDataApi = (url?: string) => {
  return useQuery({
    queryKey: ['EvolutionData'],
    queryFn: async (): Promise<Evolution> => FetchFunction(url ?? ''),
    enabled: !!url,
  });
};

export default useEvolutionDataApi;
