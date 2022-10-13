import {
  Card, Button, Image, List, Container, Grid,
} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../../actions/events';

import Event from './Event';
import EventExpired from './EventExpired';
import Loading from '../Loading';

import './styles.scss';

function Events() {
  const loadingEvents = useSelector((state) => state.events.loader);
  console.log(loadingEvents);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  });
  return (

    <div className="event">
      {loadingEvents === false && <Loading />}
      {loadingEvents === true && (
      <Container>
        <div className="title">
          <h1><span>Evénement a venir </span><span>proche de chez vous</span></h1>
        </div>
        <Grid textAlign="center" stackable divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>

              <Event />

              <div className="button_ask_question">
                <Link to="/events/add">
                  <Button circular compact 
                    content="Proposer son evenement"
                    primary
                  />
                </Link>
              </div>
            </Grid.Column>

          </Grid.Row>

        </Grid>

        {/* <div className="evenement">
          <h1><span>Evénement terminés </span><span>proche de chez vous</span></h1>

        </div> */}

        {/* <EventExpired /> */}

      </Container>
      )}

    </div>

  );
}

export default Events;
