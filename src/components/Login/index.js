import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateFieldLogin } from '../../actions/user';

function Login() {
  const mailUser = useSelector((state) => state.user.email);
  const passwordUSer = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Connexion à votre compte
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Adresse email"
              identifier="email"
              onChange={(event) => {
                const action = updateFieldLogin(event.target.value, 'email');
                dispatch(action);
              }}
              value={mailUser}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Mot de passe"
              type="password"
              identifier="password"
              value={passwordUSer}
              onChange={(event) => {
                const action = updateFieldLogin(event.target.value, 'password');
                dispatch(action);
              }}
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

{/* <input
            type="password"
            placeholder="Mot de passe"
            value={valuePassword}
            onChange={(event) => {
              const action = updateSettingsField(event.target.value, 'password');
              dispatch(action);
            }}
          /> */}
