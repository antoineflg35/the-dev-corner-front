import { Form, Container } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateFieldAddEvents, displayListDepartment, addEvent } from '../../actions/events';

import Footers from '../Footers';

import './styles.scss';

function AddEvent() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.events.titleNewEvent);
  const description = useSelector((state) => state.events.descriptionNewEvent);
  const tag = useSelector((state) => state.events.tagNewEvent);
  const adress = useSelector((state) => state.events.adress);
  const department = useSelector((state) => state.events.department_number);
  const departmentList = useSelector((state) => state.events.department_list);
  const participant = useSelector((state) => state.events.nb_participant_max);
  const date = useSelector((state) => state.events.date);
 

  useEffect(() => {
    dispatch(displayListDepartment());
  }, []);

  return (
    <div>

      <Container>
        <div className="form">
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(addEvent());
            }}
          >
            <Form.Group widths="equal">
              <Form.Input
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
                type="date"
                fluid
                label="Date"
                value={date}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'date');
                  dispatch(action);
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
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
                label="Sujet"
                control="select"
                value={tag}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'tagNewEvent');
                  dispatch(action);
                }}
              >
                <option value="Symfony">Symfony</option>
                <option value="React">React</option>
              </Form.Field>

              <Form.Field
                label="departement"
                control="select"
                value={department}
                onChange={(event) => {
                  const action = updateFieldAddEvents(event.target.value, 'department_number');
                  dispatch(action);
                }}
              >
                {
                departmentList.map((d) => <option value={d.code}>{d.code}-{d.nom}</option>)
                }

                {/* <option value="56">56</option> */}
              </Form.Field>

            </Form.Group>
            <Form.TextArea
              label="Adresse"
              placeholder="Adresse de l'événement"
              value={adress}
              onChange={(event) => {
                const action = updateFieldAddEvents(event.target.value, 'adress');
                dispatch(action);
              }}
            />
            <Form.TextArea
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
