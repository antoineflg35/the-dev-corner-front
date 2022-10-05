import {
  Card, Button, Image, List, Container, Grid,
} from 'semantic-ui-react';


import { Link } from 'react-router-dom';

import Event from './Event';
import EventExpired from './EventExpired';


import './styles.scss';

function Events() {
  return (
    <div className="event">
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
                  <Button
                    content="Proposer son evenement"
                    primary
                  />
                </Link>
              </div>
            </Grid.Column>

          </Grid.Row>

          </Grid>

          <div className="evenement">
            <h1><span>Evénement terminée </span><span>proche de chez vous</span></h1>

          </div>


          <EventExpired />
          
         

      </Container>

    </div>

  );
}

export default Events;
