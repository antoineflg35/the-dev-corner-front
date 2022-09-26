import { Container, Header, Button } from 'semantic-ui-react';
import './styles.scss';
import Content from '../Home/Content';
import Main from './Main';

function Presentation() {
  return (
    <Container className='container'>
      <div>

        <Button floated="right" primary>Se deconnecter</Button>

      </div>
      <div className='header-presentation'>
        <Header as="h1" size="huge">The Dev Corner</Header>
      </div>
      <Main />

      <div>

        <Button centred primary>creer un compte</Button>

      </div>

    </Container>

  );
}
export default Presentation;
