import { Header as HeaderSui, Container, Form } from 'semantic-ui-react';

function User() {
  return (
    <div>

      <HeaderSui textAlign="center" as="h1">The Dev Corner</HeaderSui>

      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Nom" placeholder="Nom..." />
            <Form.Input fluid label="Prenom" placeholder="Prenom..." />

          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Email" placeholder="Email.." />
            <Form.Input type="password" fluid label="Password" placeholder="Password...." />

          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field label="Département" control="select">
              <option value="Iles de france">Iles de france</option>
              <option value="Bouches du rhones">Bouches du rhones</option>
            </Form.Field>

            <Form.Field label="Techno" control="select">
              <option value="Symfony">Symfony</option>
              <option value="React">React</option>
            </Form.Field>

          </Form.Group>

          <Form.TextArea label="Description" placeholder="Votre description..." />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button primary>Créer mon compte</Form.Button>
        </Form>
      </Container>
    </div>

  );
}

export default User;
