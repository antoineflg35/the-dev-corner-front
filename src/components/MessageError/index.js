import { Link } from 'react-router-dom';
import { Message, Container, Button } from 'semantic-ui-react';

import './styles.scss';


function MessageError () {
    return (
        <Container className="not-found">
      <Message size="massive" negative>
        <Message.Header>Vous devez saisir plus de 60 caractères dans votre description</Message.Header>
        <p>THE DEV CORNER </p>
        
      </Message>
      <div className='button-redirection'>
      <Link to="/questions/add">
          <Button className='button-login' size='large' primary>Retourner sur la page d'ajout de question</Button>
        </Link>
        </div>
    </Container>



    );
}
export default MessageError ;
