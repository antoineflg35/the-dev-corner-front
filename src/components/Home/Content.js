import { useSelector } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

function Content() {
  const pseudoUser = useSelector((state) => state.user.pseudo);
  return (
    <Container>
      <Header as="h2">Bienvenue {pseudoUser} !</Header>
      <p>
        A partir de cette page, vous pouvez consulter les dernières questions, et également les événements organisés autour de chez vous !
      </p>
    </Container>
  );
}

export default Content;
