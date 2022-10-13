import {
  Card, List, Header, Icon, Label
} from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Main() {
  const { id } = useParams();
  const data = useSelector((state) => state.questions.list);
  const events = useSelector((state) => state.events.list);

  return (
    <div className="main">

      <Card.Group centered stackable>

        <Card>
          <Card.Content>
            <Header as="h2" icon textAlign="center">
              <Icon name="question" circular />
              <Header.Content>Les dernières questions</Header.Content>
            </Header>
            <List>
              {
                data.map((question) => (
                  <List.Item>
                    <List.Icon name="question" />
                    <List.Content>
                      <Link to={`/questions/details/${question.id}`}>
                        <List.Header as="a">{question.title.slice(0, 25)}...</List.Header>
                      </Link>
                      <List.Description>
                        {question.description.slice(0, 30)}
                      </List.Description>
                      <Label>{question.tag[0].techno}</Label>
                    </List.Content>
                  </List.Item>
                ))
              }
            </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Header as="h2" icon textAlign="center">
              <Icon name="marker" circular />
              <Header.Content>Les derniers événements</Header.Content>
            </Header>
            <List>
              {
                events.map((event) => (
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <Link to={`/events/details/${event.id}`}>

                        <List.Header as="a">{event.title}</List.Header>
                      </Link>
                      <List.Description>
                        {event.description.slice(0, 30)}
                      </List.Description>
                      <Label>Département n°{event.departement_number}</Label>
                    </List.Content>
                  </List.Item>
                ))
              }
            </List>
          </Card.Content>
        </Card>

      </Card.Group>
    </div>

  );
}

export default Main;
