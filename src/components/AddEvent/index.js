import { Form, Container } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { updateFieldAddEvents, addEvent } from '../../actions/events';


import Footers from '../Footers';

import './styles.scss';

function AddEvent (){

  const dispatch = useDispatch();

  const title =useSelector((state) => state.events.titleNewEvent);
  const description =useSelector((state) => state.events.descriptionNewEvent);
  const tag =useSelector((state) => state.events.tagNewEvent);
  const department =useSelector((state) => state.events.department);
  const participant =useSelector((state) => state.events.nb_participant_max);
  const date =useSelector((state) => state.events.date);



  return (
    <div>  
     
      < Container>
      <div className='form'>
    <Form
     onSubmit={(event) => {
      event.preventDefault();
      dispatch(addEvent());
    }}
    >
    <Form.Group widths='equal'>
      <Form.Input fluid
       label='Titre' 
       placeholder='titre'
       value={title}
       onChange={(event) => {
        const action = updateFieldAddEvents(event.target.value, 'titleNewEvent');
        dispatch(action);
      }}

       />
      <Form.Input type='date' fluid 
      label='Date' 
      value={date}
      onChange={(event) => {
        const action = updateFieldAddEvents(event.target.value, 'date');
        dispatch(action);
      }}

      
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Input type='number' fluid 
      label='nb-participant-max'
       placeholder='22' 
       value={participant}
       onChange={(event) => {
        const action = updateFieldAddEvents(event.target.value, 'nb_participant_max');
        dispatch(action);
      }}

       />
      <Form.Field label='Sujet'
       control='select'
       value={tag}
       onChange={(event) => {
        const action = updateFieldAddEvents(event.target.value, 'tagNewEvent');
        dispatch(action);
      }}
       
       >
        <option value='Symfony'>Symfony</option>
        <option value='React'>React</option>
      </Form.Field>

      <Form.Field label='departement'
       control='select'
       value={department}
       onChange={(event) => {
        const action = updateFieldAddEvents(event.target.value, 'department');
        dispatch(action);
      }}
       
       >
        <option value='iles de france'>iles de france</option>
        <option value='alpes maritimes'>alpes maritimes</option>
      </Form.Field>

    </Form.Group>
    <Form.TextArea 
    label='Description' 
    placeholder='Votre description...' 
    value={description}
    onChange={(event) => {
      const action = updateFieldAddEvents(event.target.value, 'descriptionNewEvent');
      dispatch(action);
    }}
    
    />
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Form.Button primary>Add your Event</Form.Button>
  </Form>
  </div>
  </Container>

  <Footers />
  </div>
  

  );
}
export default AddEvent;
