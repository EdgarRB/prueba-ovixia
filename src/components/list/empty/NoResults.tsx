import { Grid, Typography } from '@mui/material';

const NoResults = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
      }}
    >
      <Typography variant="body1" align="center">
        No results found, search again or reload the page
      </Typography>
    </Grid>
  );
};

export default NoResults;
