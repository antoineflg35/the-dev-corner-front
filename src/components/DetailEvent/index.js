import {
  Container, Header as HeaderSui, Grid, Button, Image,
} from 'semantic-ui-react';
import { useEffect } from 'react';
import map from 'src/assets/map.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  updateIdEvents, displayEventDetails, subscribeEvents, unSubscribeEvents, FetchParticipantsEvents,
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
        <HeaderSui as="h2" size="huge">{data.title}</HeaderSui>
        <HeaderSui color="blue" size="small">{data.date}</HeaderSui>
        <HeaderSui color="blue" size="small">{data.adress}</HeaderSui>

        <p>
          {data.description}
        </p>
        <HeaderSui color="blue" size="small"><h2>{nbParticipant}</h2>participants/<h2>{data.nb_participant_max}</h2>participants max</HeaderSui>

        <div className="button_ask_question">

          <Container>
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
        </div>
      </Container>

    </div>

  );
}
export default DetailEvent;
