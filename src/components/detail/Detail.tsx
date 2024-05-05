import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { usePokemonDataApi } from '../../api/usePokemonApi';
import { Pokemon, PokemonStats } from '../../model/Pokemon';
import Stats from './stats/Stats';
import Data from './data/Data';
import LoadingPage from '../loading/LoadingPage';
import Evolutions from './evolutions/Evolutions';
import Header from './header/Header';
import ErrorPage from '../error/ErrorPage';
import Styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { status, data: pokemon, error } = usePokemonDataApi(id ?? '');

  const goBack = () => {
    navigate('/');
  };

  const getTotalStats = (data: Pokemon) => {
    return data.stats
      .map((stats: PokemonStats) => stats.base_stat)
      .reduce((prev: number, next: number) => prev + next, 0);
  };

  if (status === 'pending') return <LoadingPage />;
  if (status === 'error') return <ErrorPage errorMessage={error.message} />;
  if (status === 'success') {
    return (
      <Box className={Styles.box}>
        <Paper
          sx={{
            border: '1px solid ',
            width: '80%',
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header pokemon={pokemon} />
            <Grid container direction="row" justifyContent="space-between">
              <Grid item xs={12} md={6} lg={6}>
                <Grid container direction="column" alignItems="center">
                  <Grid item xs={12}>
                    <Box
                      className={Styles.image}
                      component="img"
                      src={pokemon.sprites.front_default}
                      alt={`Image of ${pokemon.name}`}
                    />
                  </Grid>
                  <Grid sx={{ width: '95%' }}>
                    <Typography variant="h5" fontWeight={600}>
                      Stats
                    </Typography>
                    {pokemon.stats.map((pokemonStats: PokemonStats) => (
                      <Stats
                        key={`${pokemonStats.stat.name}-${pokemon.name}`}
                        stats={pokemonStats}
                      />
                    ))}
                    <Typography variant="body1" fontWeight={600}>
                      Total: {getTotalStats(pokemon)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                <Grid
                  container
                  direction="column"
                  height="100%"
                  sx={{ padding: ' 0px 10px' }}
                >
                  <Grid sx={{ height: '320px' }}>
                    <Data pokemon={pokemon} />
                  </Grid>

                  <Grid>
                    <Evolutions pokemon={pokemon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              sx={{
                padding: '5%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button variant="contained" onClick={goBack}>
                Go back to the pokedex
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }
};

export default Detail;
