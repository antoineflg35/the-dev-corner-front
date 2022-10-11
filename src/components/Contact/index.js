import {
  Header, Container, Button, Form, Segment, Card, Icon, Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Contact() {
  return (

    <><div className="header-presentation">
      <Header as="h1" size="huge" centred textAlign="center"> <span><p className="span">The Dev Corner</p></span></Header>

      <Link to="/login">

        <Button className="button-login" size="large" circular primary>Se connecter</Button>
      </Link>

      </div>
      <Container style={{ padding: '0px 0px 50px' }}>

        <Grid stackable>
          {/* <Grid.Row columns={2}> */}
          <Grid.Column width={5} floated="left">

            <Card fluid>
              <Card.Content>
                <Card.Header>Nous Contactez</Card.Header>
                <Card.Meta>Notre - adresse postale</Card.Meta>
                <Card.Description>
                  122 rue de la mer
                </Card.Description>

                <Card.Description>

                  67000 Strasbourg

                </Card.Description>

                <Card.Description>

                  Notre téléphone :

                </Card.Description>
                <Card.Description>

                  742-612-500

                </Card.Description>
              </Card.Content>
            </Card>

          </Grid.Column>

          <Grid.Column width={10} floated="right">
            <Segment>

              <Form style={{ background: 'linear-gradient(90deg, #F9E7FE, #DAFCFC)' }}>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Nom" placeholder="votre nom" />
                  <Form.Input fluid label="Email" placeholder="votre email @..." />
                </Form.Group>
                <Form.Group widths="equal">

                  <Form.TextArea label="votre message" placeholder="Tell us more about you..." />
                </Form.Group>
                <Form.Checkbox label="I agree to the Terms and Conditions" />
                <Button circular primary type="submit">Soumettre</Button>
              </Form>
            </Segment>

          </Grid.Column>

          {/* </Grid.Row> */}
        </Grid>
      </Container>
    </>

  );
}
export default Contact;
