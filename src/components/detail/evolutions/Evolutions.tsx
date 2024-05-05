import { Grid, Typography } from '@mui/material';
import useEvolutionDataApi from '../../../api/useEvolutionApi';
import useSpeciesDataApi from '../../../api/useSpeciesApi';
import { EvoChain, Evolution } from '../../../model/Evolution';
import { Pokemon } from '../../../model/Pokemon';
import LoadingPage from '../../loading/LoadingPage';
import CardDetail from '../../list/card/CardDetail';

interface EvolutionProps {
  pokemon: Pokemon;
}

const Evolutions = ({ pokemon }: EvolutionProps) => {
  const { data: species } = useSpeciesDataApi(pokemon.name);

  const evoChain = species?.evolution_chain.url;

  const { status, fetchStatus, error, data } = useEvolutionDataApi(evoChain);

  const extractSpeciesNames = (evolutions: Evolution) => {
    const names: string[] = [];

    // Recursive function to traverse the object
    const traverse = (obj: EvoChain) => {
      if (obj && typeof obj === 'object') {
        if (
          Object.prototype.hasOwnProperty.call(obj, 'species') &&
          Object.prototype.hasOwnProperty.call(obj.species, 'name')
        ) {
          const urlSeparator = obj.species.url.split('/');
          const number = urlSeparator[urlSeparator.length - 2];

          // only pokemon with id < 151 will be added to maintain consistency with the initial list
          if (Number(number) <= 151) {
            names.push(obj.species.name);
          }
        }

        if (
          Object.prototype.hasOwnProperty.call(obj, 'evolves_to') &&
          Array.isArray(obj.evolves_to)
        ) {
          obj.evolves_to.forEach((evolution) => {
            traverse(evolution);
          });
        }
      }
    };

    traverse(evolutions.chain);

    return names.filter((name: string) => name !== pokemon.name);
  };

  if (status === 'pending' || fetchStatus === 'fetching')
    return <LoadingPage />;
  if (status === 'error') return <div> {error.message}</div>;
  if (status === 'success') {
    const evoList = extractSpeciesNames(data);
    // Avoid displaying the list when the pokemon has no evolutions
    if (evoList.length > 0) {
      return (
        <>
          <Grid>
            <Typography variant="h5" fontWeight={600}>
              Evolutions
            </Typography>
          </Grid>
          <Grid container direction="row" spacing={2}>
            {evoList.map((pokemonName: string) => (
              <Grid item key={pokemonName} xs={12} sm={6} xl={4} lg={6}>
                <CardDetail name={pokemonName} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
  }
};

export default Evolutions;
