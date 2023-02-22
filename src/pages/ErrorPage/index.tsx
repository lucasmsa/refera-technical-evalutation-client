import { useRouteError } from 'react-router-dom';
import { Container, Title, Description, Label } from './styles';

export function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  const errorMessage = error.statusText || error.message;

  return (
    <Container>
      <Title>Ooops!</Title>
      <Label>Sorry, an error has occurred.</Label>
      <Description>{errorMessage}</Description>
    </Container>
  );
}
