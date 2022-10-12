import { Link } from 'react-router-dom';
import {
  Message, Container, Button, Image,
} from 'semantic-ui-react';
import photo from '../../assets/events.jpg';

function SuccessEvents() {
  return (

    <Container className="not-found">
      <Message size="massive" positive>
        <Message.Header>Votre événement a bien été ajouté </Message.Header>
        <p>THE DEV CORNER </p>
        <Link to="/events">
          <Button className="button-login" size="large" primary>Retourner sur la page des événements</Button>
        </Link>

      </Message>

      <Image src={photo} size="big" centered />
      <p>Image de vectorjuice sur Freepik</p>

    </Container>

  );
}

export default SuccessEvents;
