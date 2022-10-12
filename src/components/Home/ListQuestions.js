import { useParams, Link } from 'react-router-dom';
import {
  List, Card, Image, Container, Header, Segment, Grid, Button,
} from 'semantic-ui-react';
import photo from '../../assets/questions_home.jpg';

function ListQuestions({ data }) {
  return (

    <Container centered textAlign="center" stackable>
      <Card.Group className="questions_home" centered stackable textAlign='center'>
        {/* <Card>
        {
        data.slice(data.length - 5).map((question) => (
          <Link to={`/questions/details/${question.id}`}>
            <Card.Content>
              <List>
                <List.Item>
                  <List.Icon name="question" />
                  <List.Content>
                    <List.Header as="a">{question.title.slice(0, 15)} {question.user.pseudo}</List.Header>
                    <List.Description>
                      {question.description.slice(0, 30)}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Content>
          </Link>
        ))
      }

      </Card> */}
        <Header as="h3" centered style={{ fontSize: '2em' }}>
          Les dernières questions posées
        </Header>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>

                <Card>
                  {
        data.slice(data.length - 5).map((question) => (
          <Link to={`/questions/details/${question.id}`}>
            <Card.Content>
              <List>
                <List.Item>
                  <List.Icon name="question" />
                  <List.Content>
                    <List.Header as="a">{question.title.slice(0, 15)} {question.user.pseudo}</List.Header>
                    <List.Description>
                      {question.description.slice(0, 30)}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Content>
          </Link>
        ))
      }

                </Card>
              </Grid.Column>
              <Grid.Column  width={8}>
                <Image size='massive'  rounded size="large" src={photo} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Card.Group>
    </Container>
  );
}

export default ListQuestions;
