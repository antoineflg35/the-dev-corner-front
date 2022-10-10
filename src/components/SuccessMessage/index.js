

import { Link } from 'react-router-dom';
import { Message, Container, Button } from 'semantic-ui-react';

function SuccessMessage() {
  return (

    <Container className="not-found">
      <Message size="massive" positive>
        <Message.Header>Votre question a bien été ajouté </Message.Header>
        <p>THE DEV CORNER </p>

      </Message>
      <div className="button-redirection">
        <Link to="/questions">
          <Button className="button-login" size="large" primary>Retourner sur la page des question</Button>
        </Link>
      </div>
    </Container>

  );
}

export default SuccessMessage;
