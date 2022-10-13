import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  List, Card, Image, Container, Header, Segment, Grid, Button,
} from 'semantic-ui-react';
import photo from '../../assets/questions_home.jpg';
import ButtonAskQuestion from './ButtonAskQuestion';

function ListQuestions({ data }) {
  const tags = useSelector((state) => state.user.techno_user);


  const departement = useSelector((state) => state.user.department_user);
  const filterQuestions = data.filter((question) => question.user.departement_number === departement);
  const tagfiltre = tags.map((tag) => tag.techno);
  const filtre = filterQuestions.filter((question) => (question.tag.filter(({ techno }) => tagfiltre.includes(techno))));


  return (

    <Container centered textAlign="center" stackable>
      <Card.Group className="questions_home" centered stackable textAlign="center">
        <Header as="h3" centered style={{ fontSize: '2em', margin: '50px'}}>
          Les dernières questions en rapport { tagfiltre } avec et dans le département {departement}
        </Header>
       
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>

                <Card>
                  {
        filtre.map((question) => (

          <Card.Content>
            <List>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                  <Link to={`/questions/details/${question.id}`}>
                    <List.Header as="a">{question.title.slice(0, 30)}...</List.Header>
                  </Link>
                  <List.Header Icon as="a"> Utilisateur {question.user.pseudo}</List.Header>
                  <List.Description>
                    {question.description.slice(0, 30)}
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Card.Content>

        ))
      }

                </Card>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image size="massive" rounded size="large" src={photo} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Card.Group>
      <ButtonAskQuestion />
    </Container>
  );
}

export default ListQuestions;
