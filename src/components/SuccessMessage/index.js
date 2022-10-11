import { Link } from 'react-router-dom';
import {
  Message, Container, Button, Image,
} from 'semantic-ui-react';
import photo from '../../assets/questions.jpg';

function SuccessMessage() {
  return (

    <Container className="not-found">
      <Message size="massive" positive>
        <Message.Header>Votre question a bien été ajouté </Message.Header>
        <p>THE DEV CORNER </p>
        <Link to="/questions">
          <Button className="button-login" size="large" primary>Retourner sur la page des question</Button>
        </Link>

      </Message>

      <Image src={photo} size="big" centered />
      <p>Image de vectorjuice sur Freepik</p>

    </Container>

  );
}

export default SuccessMessage;
