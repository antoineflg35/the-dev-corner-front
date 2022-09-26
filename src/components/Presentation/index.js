import { Container, Header, Button } from 'semantic-ui-react';
import './styles.scss';
import Content from '../Home/Content';
import Main from './Main';

function Presentation() {
  return (
    <Container>
      <div>

        <Header as="h1">The Dev Corner</Header>

      </div>
      <div>

        <Button floated="right" primary>Se deconnecter</Button>

      </div>

      <Content />

      <Main />

      <div>

        <Button centred primary>creer un compte</Button>

      </div>

    </Container>

  );
}
export default Presentation;
