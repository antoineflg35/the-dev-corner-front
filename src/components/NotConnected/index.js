import { Message,Container } from 'semantic-ui-react';

// == Composant
function NotConnected() {
  return <Container className="not-found">
    
    <Message  size='massive' negative>
    <Message.Header>Vous devez être connecté pour avoir accès à ces contenus</Message.Header>
    <p>THE DEV CORNER </p>
  </Message>

    </Container>;
}

// == Export
export default NotConnected;
