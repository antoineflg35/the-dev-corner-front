import {
  Card, Button, Image, List, Container, Grid,
} from 'semantic-ui-react';


import { Link } from 'react-router-dom';

import Event from './Event';

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
              {/* <Card fluid>
                <div className="carteEvent">
                  <Event />
                </div>
                

              </Card> */}
              

<Card  fluid>
     <Grid  stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
      <Card.Content>
        <Card.Header ><h2>1-event</h2></Card.Header>
        <Card.Meta>bouche du rhone</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville Matthew is a pianist living in Nashville.
          
        </Card.Description>
      </Card.Content>
      </Grid.Column>
      
      <Grid.Column>
        <Card.Content>
        <Card.Header ><h2>25 </h2>participant</Card.Header>
        <Card.Meta>/</Card.Meta>
        <Card.Description>
          200 .
        </Card.Description>
      </Card.Content>
          </Grid.Column>
           <Grid.Column>
          
          <Card.Content >
          <Grid >
          <Grid.Row columns={1}>
            <Grid.Column>
        <div className='ui two buttons'>
         
        
          <Button  primary>
            s'inscrire
          </Button>
          <Button   color='pink'>
            voir plus
          </Button>
         
        </div>
          </Grid.Column>
      
          </Grid.Row>
        </Grid>
      </Card.Content>
      </Grid.Column>
      
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
      <Card.Content>
        <Card.Header><h2>2-event</h2></Card.Header>
        <Card.Meta>bouche du rhone</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville Matthew is a pianist living in Nashville.
        </Card.Description>
      </Card.Content>
      </Grid.Column>
      
      <Grid.Column>
        <Card.Content>
        <Card.Header><h2>25 </h2>participant</Card.Header>
        <Card.Meta>/</Card.Meta>
        <Card.Description>
          200 .
        </Card.Description>
      </Card.Content>
          </Grid.Column>
           <Grid.Column>
          
          <Card.Content >
          <Grid >
          <Grid.Row columns={1}>
            <Grid.Column>
        <div className='ui two buttons'>
         
        
          <Button primary>
            s'inscrire
          </Button>
          <Button color='pink'>
            voir plus
          </Button>
         
        </div>
          </Grid.Column>
      
          </Grid.Row>
        </Grid>
      </Card.Content>
      </Grid.Column>
      
          </Grid.Row>
          
        </Grid>
        
         
    </Card>


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
          
          <Card.Group stackable itemsPerRow={3}>
          
              <Card>
                <div className="carte">
                  <List className="li">
                    <div className="flex">
                      <div className="left">
                        <h3>
                          1-Event
                        </h3>
                        <p>
                          lorem ipsum  lorem ipsum  lorem ipsum
                        </p>
                      </div>

                      <div className="right">
                        20 utilisateur en participé
                      </div>
                    </div>
                  </List>

                  <List className="li">
                    <div className="flex">
                      <div className="left">
                        <h3>
                          1-Event
                        </h3>
                        <p>
                          lorem ipsum  lorem ipsum  lorem ipsum
                        </p>
                      </div>

                      <div className="right">
                        22 utilisateur en participé
                      </div>
                    </div>
                  </List>
                </div>

              </Card>

            
              <Card>
                <div className="carte">

                  <List className="li">
                    <div className="flex">
                      <div className="left">
                        <h3>
                          1-Event
                        </h3>
                        <p>
                          lorem ipsum  lorem ipsum  lorem ipsum
                        </p>
                      </div>

                      <div className="right">
                        24 utilisateur en participé
                      </div>
                    </div>
                  </List>

                  <List className="li">
                    <div className="flex">
                      <div className="left">
                        <h3>
                          1-Event
                        </h3>
                        <p>
                          lorem ipsum  lorem ipsum  lorem ipsum
                        </p>
                      </div>

                      <div className="right">
                        26 utilisateur en participé
                      </div>
                    </div>
                  </List>
                </div>

              </Card>

            

              <Card>
                <div className="carte">
                  <List className="li">
                    <div className="flex">
                      <div className="left">
                        <h3>
                          1-Event
                        </h3>
                        <p>
                          lorem ipsum  lorem ipsum  lorem ipsum
                        </p>
                      </div>

                      <div className="right">
                        28 utilisateur en participé
                      </div>
                    </div>
                  </List>

                  <List className="li">
                    <div className="flex">
                      <div className="left">
                        <h3>
                          1-Event
                        </h3>
                        <p>
                          lorem ipsum  lorem ipsum  lorem ipsum
                        </p>
                      </div>

                      <div className="right">
                        30 utilisateur en participé
                      </div>
                    </div>
                  </List>
                </div>
              </Card>

           
        </Card.Group>


      </Container>

    </div>

  );
}

export default Events;
