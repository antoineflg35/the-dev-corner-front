import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Main from './Main';

function Presentation() {
  return (
    <Container>
      <div>
        <Link to="/login">
          <Button floated="right" primary>Se connecter</Button>
        </Link>
      </div>
      <div className="header-presentation">
        <Header as="h1" size="huge" centred> Bienvenue sur <span ><p className='span'>The Dev Corner</p></span></Header>
      </div>
      <Main />

      <div>
        <Link to="/user">
          <Button centred primary>Créer un compte</Button>
        </Link>
      </div>
      </Container>

    

  );
}
export default Presentation;
