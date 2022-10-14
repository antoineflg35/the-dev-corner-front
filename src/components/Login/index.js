import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFieldLogin, login, saveDataUser, loginToken,
} from '../../actions/user';

function Login() {
  const mailUser = useSelector((state) => state.user.username);
  const passwordUSer = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();

  return (

    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Link to="/">
          <Header textAlign="center" as="h1">The Dev Corner</Header>
        </Link>
        <Header as="h2" color="teal" textAlign="center">
          Connexion à votre compte
        </Header>
        <Form
          size="large"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(login());
            // dispatch(loginToken());
            // dispatch(saveDataUser());
          }}
        >

          {
            logged === false && (
              <Header as="h2" color="teal" textAlign="center">
                La connexion a échoué. Veuillez vérifier vos identifants.
              </Header>
            )
          }
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Adresse email"
              identifier="username"
              onChange={(event) => {
                const action = updateFieldLogin(event.target.value, 'username');
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
