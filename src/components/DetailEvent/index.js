import {
  Container, Header as HeaderSui, Grid, Button, Image,
} from 'semantic-ui-react';
import { useEffect } from 'react';
import map from 'src/assets/map.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  updateIdEvents, displayEventDetails, subscribeEvents, unSubscribeEvents, FetchParticipantsEvents
} from '../../actions/events';
import './styles.scss';

function DetailEvent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(updateIdEvents(id));
    dispatch(displayEventDetails());
    dispatch(FetchParticipantsEvents());
  }, []);
  

  const data = useSelector((state) => state.events.list);
  const nbParticipant = useSelector((state) => state.events.nb_participant);
  const participe = useSelector((state) => state.events.participate);

  return (
    <div>

      <Container className="content">
      {/* <Link to="/events">
          Retour à la liste des événements
        </Link> */}
        <HeaderSui as="h2" size="huge">{data.title}</HeaderSui>
        <HeaderSui color="blue" size="small">{data.date}</HeaderSui>
        <HeaderSui color="blue" size="small">{data.adress}</HeaderSui>

        <p>
          {data.description}
        </p>
        <HeaderSui color="blue" size="small">{nbParticipant}/{data.nb_participant_max}</HeaderSui>

        <Grid stackable>
          <Grid.Column floated="left" width={5}>
            Domestic dogs inherited complex behaviors, such as bite inhibition, from
            their wolf ancestors, which would have been pack hunters with complex
            body language. These sophisticated forms of social cognition and
            communication may account for their trainability, playfulness, and
            ability to fit into human households and social situations, and these
            attributes have given dogs a relationship with humans that has enabled
            them to become one of the most successful species on the planet today.
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <Image src={map} />
          </Grid.Column>
        </Grid>

        <Container class="button_ask_question">
          {!participe
          && (
          <Button
            content="Participer à l'évenement"
            primary
            onClick={() => {
              dispatch(subscribeEvents());
            }}
          />
          )}
          {participe && (
          <Button
            content="Se désincrire"
            negative
            onClick={() => {
              dispatch(unSubscribeEvents());
            }}
          />
          )}
        </Container>
      </Container>

    </div>

  );
}
export default DetailEvent;
