import {
  Button, Icon, Image, Item, Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Event() {
  const events = useSelector((state) => state.events.list);
  const departmentUser = useSelector((state) => state.user.department_user);

  const filterEvents = events.filter((event) => event.departement_number === departmentUser);

  console.log(events);
  return (
    <Item.Group divided>

      {
      filterEvents.map((event) => (
        <Item>
          {/* <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}

          <Item.Content>
            <Item.Header as="a">{event.title}</Item.Header>
            <Item.Meta>
              <span className="cinema">{event.date.toString().slice(0, 10)}</span>
            </Item.Meta>
            <Item.Meta>
              <span className="cinema"> Département {event.departement_number}</span>
            </Item.Meta>
            <Item.Description>    {event.description}.</Item.Description>
            <Item.Extra>
              <Link to={`/events/details/${event.id}`}>
                <Button primary  circular floated="right">
                  Voir plus
                  <Icon name="right chevron" />
                </Button>
              </Link>
            </Item.Extra>
          </Item.Content>
        </Item>
      ))
    }

    </Item.Group>
  // <Card fluid>
  //   <Grid stackable>

  //     {
  //     filterEvents.map((event) => (
  //       <Grid.Row columns={3}>
  //         <Grid.Column>
  //           <Card.Content>
  //             <Card.Header><h2>{event.id}-{event.title}</h2></Card.Header>
  //             <Card.Meta>Département: {eventdepartement_number}</.Card.Meta>
  //             <Card.Description>
  //               {event.description}.

  //             </Card.Description>
  //           </Card.Content>
  //         </Grid.Column>

  //         <Grid.Column>
  //           <Card.Content>
  //             <Card.Header><h2> Date</h2></Card.Header>
  //             <Card.Meta>/</Card.Meta>
  //             <Card.Description>
  //              <h2>{event.date.toString().slice(0,10)}</h2>
  //             </Card.Description>
  //           </Card.Content>
  //         </Grid.Column>
  //         <Grid.Column>

  //           <Card.Content>
  //             <Grid>
  //               <Grid.Row columns={1}>
  //                 <Grid.Column>
  //                   <div className="ui two buttons">
  //                     <Link to={`/events/details/${event.id}`}>

  //                       <Button compact color="pink">
  //                         voir plus
  //                       </Button>
  //                     </Link>

  //                   </div>
  //                 </Grid.Column>

  //               </Grid.Row>
  //             </Grid>
  //           </Card.Content>
  //         </Grid.Column>

  //       </Grid.Row>
  //     ))
  //   }
  //   </Grid>

  // </Card>

  );
}
export default Event;
