import {
  List, Card, Container, Header, Grid, Segment, Image,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import photo from '../../assets/events_home.jpg';

function ListEvents({ data }) {
  const departmentUser = useSelector((state) => state.user.department_user);

  const filterEvents = data.filter((event) => event.departement_number === departmentUser);
  console.log(filterEvents);


  return (

    <Container centered textAlign="center" stackable>
      <Card.Group className="questions_home" centered stackable textAlign="center">
        <Header as="h3" centered style={{ fontSize: '2em' }}>
          Les derniers événements crées dans le département {departmentUser}
        </Header>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>

                <Card>
                  {
      filterEvents.map((event) => (
        <Link to={`/events/details/${event.id}`}>
          <Card.Content>
            <List>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                  <List.Header as="a">{event.title.slice(0, 15)}</List.Header>
                  <List.Description>
                    {event.description.slice(0, 30)}
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
              <Grid.Column width={8}>
                <Image size="massive" rounded size="large" src={photo} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Card.Group>
    </Container>
  );
}

export default ListEvents;
