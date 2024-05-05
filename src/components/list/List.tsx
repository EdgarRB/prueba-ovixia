import { Box, Grid, Typography } from '@mui/material';
import { usePokemonListApi } from '../../api/usePokemonApi';
import CardDetail from './card/CardDetail';
import SearchComponent from './search/SearchComponent';
import Styles from './List.module.css';
import { useState } from 'react';
import LoadingPage from '../loading/LoadingPage';
import CommonInterface from '../../model/Common';
import NoResults from './empty/NoResults';
import ErrorPage from '../error/ErrorPage';

const List = () => {
  const { status, data, error } = usePokemonListApi();

  const [searchQuery, setSearchQuery] = useState<string>('');

  if (status === 'pending') return <LoadingPage />;
  if (status === 'error') return <ErrorPage errorMessage={error.message} />;
  if (status === 'success') {
    const filteredResults = data.results.filter((pokemon: CommonInterface) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredResults.length > 0) {
      return (
        <Box className={Styles.box}>
          <Typography variant="h4" fontWeight="600" gutterBottom>
            Pokedex
          </Typography>

          <SearchComponent setSearchQuery={setSearchQuery} />
          <Grid className={Styles.grid} container spacing={2}>
            {filteredResults.map((pokemon: CommonInterface) => (
              <Grid item key={pokemon.name} xs={12} sm={6} xl={3} lg={4}>
                <CardDetail name={pokemon.name} />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
    return (
      <Box className={Styles.box}>
        <Typography variant="h4" fontWeight="600" gutterBottom>
          Pokedex
        </Typography>
        <SearchComponent setSearchQuery={setSearchQuery} />
        <NoResults />
      </Box>
    );
  }
};

export default List;
