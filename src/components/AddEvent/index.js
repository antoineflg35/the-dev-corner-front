import { Form, Container, Button, Message } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { updateFieldAddEvents, displayListDepartment, addEvent } from '../../actions/events';
import { fetchListTag } from '../../actions/newUser';

import Footers from '../Footers';

import './styles.scss';

function AddEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useSelector((state) => state.events.titleNewEvent);
  const description = useSelector((state) => state.events.descriptionNewEvent);
  const tag = useSelector((state) => state.events.tagNewEvent);
  const adress = useSelector((state) => state.events.adress);
  const department = useSelector((state) => state.events.department_number);
  const departmentList = useSelector((state) => state.events.department_list);
  const participant = useSelector((state) => state.events.nb_participant_max);
  const tagaddEvents = useSelector((state) => state.newUser.tag);
  const eventAdd = useSelector((state) => state.events.eventAdd);
  const date = useSelector((state) => state.events.date);

  useEffect(() => {
    dispatch(displayListDepartment());
    dispatch(fetchListTag());
  }, []);

  return (
    <div>

      <Container className="events">
        <Link to="/events">
          <Button className="button-login" size="large" circular primary>Retour à la liste des événements</Button>
        </Link>
        <div className="form">
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(addEvent());
              if (eventAdd) {
                navigate('/success-events');
              }
            }}
          >
            <Form.Group widths="equal">
              <Form.Input
                required
                fluid
                label="Titre"
                placeholder="titre"
                value={title}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'titleNewEvent');
                  dispatch(action);
                }}
              />
              <Form.Input
                required
                type="date"
                fluid
                label="Date"
                value={date}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'date');
                  dispatch(action);
                }}
              />
              {eventAdd === false
              && (
              <Message negative>
                <Message.Header>Désolé, vous ne pouvez pas afficher une date antérieure</Message.Header>
                <p>That offer has expired</p>
              </Message>
              )}
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                required
                type="number"
                fluid
                label="nb-participant-max"
                placeholder="22"
                value={participant}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'nb_participant_max');
                  dispatch(action);
                }}
              />
              <Form.Field
                required
                label="Sujet"
                control="select"
                value={tag}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'tagNewEvent');
                  dispatch(action);
                }}
              >
                <option value="Sélectionner un département">Sélectionner un tag</option>
                {
                  tagaddEvents.map((tag) => <option key={tag.id} value={tag.techno}>{tag.techno}</option>)
                }
              </Form.Field>

              <Form.Field
                required
                label="departement"
                control="select"
                value={department}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'department_number');
                  dispatch(action);
                }}

              >
                <option value="Sélectionner un département">Sélectionner un département</option>
                {
                departmentList.map((d) => <option value={d.code}>{d.code}-{d.nom}</option>)
                }
              </Form.Field>

            </Form.Group>
            <Form.TextArea
              required
              label="Adresse"
              placeholder="Adresse de l'événement"
              value={adress}
              onChange={(event) => {
                const action = updateFieldAddEvents(event.target.value, 'adress');
                dispatch(action);
              }}
            />
            <Form.TextArea
              required
              label="Description"
              placeholder="Votre description..."
              value={description}
              onChange={(event) => {
                const action = updateFieldAddEvents(event.target.value, 'descriptionNewEvent');
                dispatch(action);
              }}
            />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Form.Button primary>Add your Event</Form.Button>
          </Form>
        </div>
      </Container>

    </div>

  );
}
export default AddEvent;
