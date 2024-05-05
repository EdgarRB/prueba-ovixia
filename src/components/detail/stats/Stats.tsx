import { Grid, Slider, Typography } from '@mui/material';
import { PokemonStats } from '../../../model/Pokemon';

interface StatsProps {
  stats: PokemonStats;
}

const Stats = ({ stats }: StatsProps) => {
  const getMarks = (stat: number) => {
    return [
      {
        value: 0,
        label: '0',
      },
      {
        value: stat,
        label: stat,
      },
      {
        value: 255,
        label: '255',
      },
    ];
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={3} lg={3}>
        <Typography variant="body1">{stats.stat.name}</Typography>
      </Grid>
      <Grid item xs={12} md={9} lg={9}>
        <Slider
          value={stats.base_stat}
          max={255}
          min={0}
          disabled
          sx={{ width: '80%' }}
          marks={getMarks(stats.base_stat)}
          aria-label={stats.stat.name}
        />
      </Grid>
    </Grid>
  );
};

export default Stats;
