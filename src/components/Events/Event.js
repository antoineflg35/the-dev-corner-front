import {
  Button, Card, Image, Icon, List,
} from 'semantic-ui-react';

import { useParams,Link } from 'react-router-dom';


function Event() {
  const {id} = useParams();
  return (
    <List>
      <div className="top">

        1-Event

      </div>
      <div className="bottom">
        <span>
          An excellent polish restaurant, quick delivery and hearty, filling meals.

        </span>

        <p className="nbparticpe">
          deja 25 participants /200 participants
        </p>
        <div>
          <div className='button-top'>
          <Link to = {`/events/details/${id}`}>

          <Button  compact primary> voir plus</Button>
          </Link>
          </div>
          <div className='button-bottom'>         
             <Button compact primary>s'inscrire</Button>
          </div>

        </div>

      </div>

    </List>

  );
}
export default Event;
