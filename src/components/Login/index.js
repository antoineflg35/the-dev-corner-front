import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Connexion à votre compte
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="Adresse email" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Mot de passe"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Link to="/user">
          <Message>
            Pas encore de compte ? <a href="#">Créer un compte</a>
          </Message>
        </Link>
      </Grid.Column>
    </Grid>
  );
}
export default Login;
