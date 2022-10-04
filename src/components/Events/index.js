import {
  Card, Button, Image, List, Container, Grid,
} from 'semantic-ui-react';

import {Link} from 'react-router-dom';

import Event from './Event';

import './styles.scss';

function Events() {
  return (
    <div className='event'> 

      <Container>

        <div className="title">

          <h1><span>Evénement a venir </span><span>proche de chez vous</span></h1>

        </div>
        <Grid textAlign='center' stackable divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Card fluid>
                <div className="carteEvent">
                  <Event />
                  <Event />
                  <Event />
                  <Event />
                  <Event />
                  <Event />
                  <Event />
                  <Event />
                </div>

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

          <div className="evenement">
            <h1><span>Evénement terminée </span><span>proche de chez vous</span></h1>

          </div>

          <Grid.Row columns={3}>
            <Grid.Column>

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

            </Grid.Column>
            <Grid.Column>

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

            </Grid.Column>
            <Grid.Column>

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

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>

    </div>

  );
}

export default Events;
{ /* <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>

    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid> */ }
