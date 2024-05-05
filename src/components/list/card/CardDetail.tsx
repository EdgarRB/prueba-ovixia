import { Card, CardActionArea, CardHeader, CardMedia } from '@mui/material';
import { usePokemonDataApi } from '../../../api/usePokemonApi';
import CardSkeleton from './CardSkeleton';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  name: string;
}

const CardDetail = ({ name }: CardProps) => {
  const { status, data, error } = usePokemonDataApi(name);
  const navigate = useNavigate();

  const showData = (name: string) => {
    navigate(`/detail/${name}`);
  };

  if (status === 'pending') return <CardSkeleton />;
  if (status === 'error') return <div> {error.message}</div>;
  if (status === 'success') {
    return (
      <Card title={data.name} key={data.name} variant="outlined">
        <CardActionArea onClick={() => showData(data.name)}>
          <CardHeader title={`N.º: ${data.id} - ${data.name}`} />
          <CardMedia
            component="img"
            image={data.sprites.front_default}
            alt={`Image of ${name}`}
          />
        </CardActionArea>
      </Card>
    );
  }
};

export default CardDetail;
