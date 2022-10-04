import {
  Button, Card, Image, Icon, List,
} from 'semantic-ui-react';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Event() {
  const { id } = useParams();
  const events = useSelector((state) => state.events.list);
  console.log(events);
  return (
    <List>
      {
        events.map((event) => (
          <>
            <div className="top">
              {event.id}- {event.title}
            </div><div className="bottom">
              <span>
                {event.description.slice(0,60)}...
              </span>
              <p className="nbparticpe">
                deja 25 participants /{event.nb_participant_max}
              </p>
              <div>
                <div className="button-top">
                  <Link to={`/events/details/${event.id}`}>
                    <Button compact primary> voir plus</Button>
                  </Link>
                </div>
                <div className="button-bottom">
                  <Button compact primary>s'inscrire</Button>
                </div>
              </div>
                  </div>
          </>
        ))
      }

    </List>

  );
}
export default Event;
