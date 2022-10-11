import {
  List, Card,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ListEvents() {
  const events = useSelector((state) => state.events.list);
  console.log(events);
  return (
    <Card.Group centered>

      <Card>
        <Card.Content>
          <Card.Header>Les statistiques</Card.Header>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
            Steve wants to add you to the group <strong>best friends</strong>
            Steve wants to add you to the group <strong>best friends</strong>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <List>
            {
            events.slice(events.length-5).map((event) => (
              <Link to={`/events/details/${event.id}`}>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>
                    <List.Header as="a">{event.title}</List.Header>
                    <List.Description>
                      {event.description.slice(0, 30)}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </Link>
            ))
          }
          </List>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default ListEvents;
