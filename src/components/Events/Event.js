import {
  Button, Icon, Image, Item, Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import images1 from '../../assets/images/images2.jpeg';
import images2 from '../../assets/images/images3.jpeg';
import images3 from '../../assets/images/images4.jpeg';
import images4 from '../../assets/images/images5.jpeg';
import images5 from '../../assets/images/images6.jpeg';
import images6 from '../../assets/images/images6.jpeg';

const Images = [
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,

];

const randomIndex = Math.floor(Math.random() * Images.length);
const selectedImages = Images[randomIndex];

function Event() {
  const events = useSelector((state) => state.events.list);
  const departmentUser = useSelector((state) => state.user.department_user);

  const filterEvents = events.filter((event) => event.departement_number === departmentUser);

  console.log(events);
  return (
    <Item.Group stackable divided>

      {
      filterEvents.map((event) => (
        <Item>
          <Item.Image size="small" circular src={selectedImages} />

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
                <Button primary circular floated="right">
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

  );
}
export default Event;
