import {
  Button, Card, Grid,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Event() {
  const events = useSelector((state) => state.events.list);
  const departmentUser = useSelector((state) => state.user.department_user);

  const filterEvents = events.filter((event)=> event.departement_number === departmentUser);

  console.log(events);
  return (

    <Card fluid>
      <Grid stackable>

        {
        filterEvents.map((event) => (
          <Grid.Row columns={3}>
            <Grid.Column>
              <Card.Content>
                <Card.Header><h2>{event.id}-{event.title}</h2></Card.Header>
                <Card.Meta>Département: {event.departement_number}</Card.Meta>
                <Card.Description>
                  {event.description}.

                </Card.Description>
              </Card.Content>
            </Grid.Column>

            <Grid.Column>
              <Card.Content>
                <Card.Header><h2>25 </h2>participants</Card.Header>
                <Card.Meta>/</Card.Meta>
                <Card.Description>
                 <h2>{event.nb_participant_max}</h2>  participants max
                </Card.Description>
              </Card.Content>
            </Grid.Column>
            <Grid.Column>

              <Card.Content>
                <Grid>
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <div className="ui two buttons">

                        <Link>
                          <Button compact primary>
                            s'inscrire
                          </Button>
                        </Link>
                        <Link to={`/events/details/${event.id}`}>

                          <Button compact color="pink">
                            voir plus
                          </Button>
                        </Link>

                      </div>
                    </Grid.Column>

                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Grid.Column>

          </Grid.Row>
        ))
      }
      </Grid>

    </Card>

  );
}
export default Event;
