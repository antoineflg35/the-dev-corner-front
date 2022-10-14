import {
  Container, Header as HeaderSui, Grid, Button, Image,
} from 'semantic-ui-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  updateIdEvents, displayEventDetails, subscribeEvents, unSubscribeEvents, FetchParticipantsEvents, fetchEvents,
} from '../../actions/events';
import './styles.scss';
import Loading from '../Loading';

function DetailEvent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(updateIdEvents(id));
    dispatch(displayEventDetails());
    dispatch(FetchParticipantsEvents());
  }, []);

  const data = useSelector((state) => state.events.detailsEvent);
  const nbParticipant = useSelector((state) => state.events.nb_participant);
  const participe = useSelector((state) => state.events.participate);
  const loadingEventsDetails = useSelector((state) => state.events.loadingDetailsEvents);
  console.log(loadingEventsDetails);

  return (
    <div>
      {
        loadingEventsDetails === false && <Loading />
      }
      {loadingEventsDetails
      && (
      <Container className="content">
        <Link to="/events">
          <Button
            className="button-login"
            size="large"
            circular
            primary
          >Retour à la liste des événements
          </Button>
        </Link>
        <HeaderSui as="h2" size="huge">{data.title}</HeaderSui>
        <HeaderSui as='h2' color="blue" size="large">Date</HeaderSui>
        <HeaderSui size="small">{data.date.toString().slice(0, 10)} </HeaderSui>
        <HeaderSui as='h2' clor='blue' size="large">Adresse de l'événement</HeaderSui>
        <HeaderSui size="small">{data.adress}</HeaderSui>
        <HeaderSui as='h2' clor='blue' size="large">Description de l'événement</HeaderSui>
        <p>
          {data.description}
        </p>
        <HeaderSui color="blue" size="small"><h2>{nbParticipant}</h2>participants/<h2>{data.nb_participant_max}</h2>participants max</HeaderSui>

        <div className="button_ask_question">

          <Container>
            {!participe
          && (
          <Button

            circular
            content="Participer à l'évenement"
            primary
            onClick={() => {
              dispatch(subscribeEvents());
            }}
          />
          )}
            {participe && (
            <Button
              circular
              content="Se désincrire"
              negative
              onClick={() => {
                dispatch(unSubscribeEvents());
              }}
            />
            )}
          </Container>
        </div>
      </Container>
      )}

    </div>

  );
}
export default DetailEvent;
