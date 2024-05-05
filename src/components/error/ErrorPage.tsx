import Styles from './ErrorPage.module.css';
import { Typography, Container, Box } from '@mui/material';

interface ErrorPageProps {
  errorMessage: string;
}

const ErrorPage = ({ errorMessage }: ErrorPageProps) => {
  return (
    <Box className={Styles.box}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" align="center">
          {errorMessage}
        </Typography>
      </Container>
    </Box>
  );
};

export default ErrorPage;
