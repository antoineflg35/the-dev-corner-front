import {
  Header as HeaderSui, Container, Form, Checkbox,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFieldNewLogin } from '../../actions/newUser';

function User() {
  const dispatch = useDispatch();

  const emailUser = useSelector((state) => state.newUser.email);
  const passwordUser = useSelector((state) => state.newUser.password);
  const nameUser = useSelector((state) => state.newUser.name);
  const surnameUser = useSelector((state) => state.newUser.surname);
  const department = useSelector((state) => state.newUser.department);
  const descriptionUser = useSelector((state) => state.newUser.description);
  const tag = useSelector((state) => state.newUser.tag);

  return (
    <div>

      <HeaderSui textAlign="center" as="h1">The Dev Corner</HeaderSui>

      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              value={nameUser}
              fluid
              label="Nom"
              placeholder="Nom..."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'name');
                dispatch(action);
              }}
            />
            <Form.Input
              value={surnameUser}
              fluid
              label="Prenom"
              placeholder="Prenom..."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'surname');
                dispatch(action);
              }}
            />

          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              value={emailUser}
              fluid
              label="Email"
              placeholder="Email.."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'email');
                dispatch(action);
              }}
            />
            <Form.Input
              value={passwordUser}
              type="password"
              fluid
              label="Password"
              placeholder="Password...."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'password');
                dispatch(action);
              }}
            />

          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              value={department}
              label="Département"
              control="select"
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'department');
                dispatch(action);
              }}
            >
              <option value="Choississez votre département">Choisissez votre département</option>
              <option value="Iles de france">Iles de france</option>
              <option value="Bouches du rhones">Bouches du rhones</option>
            </Form.Field>

          </Form.Group>
          <Form.Group widths="equal">
            <h3>Choisissez vos technologies préférées</h3>
            <Checkbox
              label="JS"
              value={tag}
              onChange={() => {
              }}
            />
            <Checkbox
              value={tag}
              label="PHP"
              onChange={(event) => {
                console.log(event);
              }}

            />
          </Form.Group>

          <Form.TextArea
            value={descriptionUser}
            label="Description"
            placeholder="Votre description..."
            onChange={(event) => {
              const action = changeFieldNewLogin(event.target.value, 'description');
              dispatch(action);
            }}
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button primary>Créer mon compte</Form.Button>
        </Form>
      </Container>
    </div>

  );
}

export default User;
