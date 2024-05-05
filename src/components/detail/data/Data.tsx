import { Grid, Typography } from '@mui/material';
import {
  Pokemon,
  PokemonAbilities,
  PokemonTypes,
} from '../../../model/Pokemon';

interface DataProps {
  pokemon: Pokemon;
}

const Data = ({ pokemon }: DataProps) => {
  return (
    <Grid
      container
      sx={{ height: '100%' }}
      direction="column"
      justifyContent="space-evenly"
    >
      <Typography variant="h5" fontWeight={600}>
        Data
      </Typography>

      <Typography variant="body1">Height: {pokemon.height}</Typography>

      <Typography variant="body1">Weight: {pokemon.weight}</Typography>

      <Typography variant="body1">
        {pokemon.abilities.length > 1 ? 'Abilities' : 'Ability'}:{' '}
        {pokemon.abilities
          .map((ability: PokemonAbilities) => ability.ability.name)
          .join(', ')}
      </Typography>

      <Typography variant="body1">
        {pokemon.types.length > 1 ? 'Types' : 'Type'}:{' '}
        {pokemon.types.map((types: PokemonTypes) => types.type.name).join(', ')}
      </Typography>
    </Grid>
  );
};

export default Data;
