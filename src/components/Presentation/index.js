import {
  Container, Header, Button, Grid, Segment, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Main from './Main';

function Presentation() {
  return (
    <Container fluid>
      <div className="header-presentation">
        <Header as="h1" size="huge" centred textAlign="center"> Bienvenue sur <span><p className="span">The Dev Corner</p></span></Header>
        <Link to="/login">
          <Button className='button-login' size='large' primary>Se connecter</Button>
        </Link>
      </div>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Découvrez une communauté de développeurs autour de chez vous
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Avec The Dev Corner, vous avez la possibilité de poser des questions, d'y répondre...
                bref de trouver toutes les réponses à vos questions
              </p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Organisez des événements
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Rassemblez les professionnels et passionnés du développement web, pour partagez des bonnes pratiques, et pourquoi pas trouver un nouveau job !
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src="/images/wireframe/white-image.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Link to="/user">
                <Button className='button-new-user' centred size='large' primary>Créer un compte</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Main />
    </Container>

  );
}
export default Presentation;
