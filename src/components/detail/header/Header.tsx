import { Grid, Typography } from '@mui/material';
import { Pokemon } from '../../../model/Pokemon';
import Styles from './Header.module.css';

interface HeaderProps {
  pokemon: Pokemon;
}

const Header = ({ pokemon }: HeaderProps) => {
  return (
    <Grid className={Styles.header}>
      <Typography variant="h4" fontWeight={600}>
        N.º: {pokemon.id} - {pokemon.name}
      </Typography>
    </Grid>
  );
};

export default Header;
