import { Link } from 'react-router-dom';
import { Message, Container, Button } from 'semantic-ui-react';

import './styles.scss';

// == Composant
function NotConnected() {
  return (
    <Container className="not-found">
      <Message size="massive" negative>
        <Message.Header>Vous devez être connecté pour avoir accès à ces contenus</Message.Header>
        <p>THE DEV CORNER </p>
        <Link to="/">
          <Button className='button-login' size='large' primary>Retourner sur la page présentation</Button>
        </Link>
      </Message>
    </Container>
  );
}

// == Export
export default NotConnected;
