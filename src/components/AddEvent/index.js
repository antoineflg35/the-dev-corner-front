import { Form, Container } from 'semantic-ui-react'

import Header from '../Header';
import Footers from '../Footers';

import './styles.scss';

function AddEvent (){
  
  

  return (
    <div>  
      <Header />
      < Container>
      <div className='form'>
    <Form>
    <Form.Group widths='equal'>
      <Form.Input fluid label='Titre' placeholder='titre' />
      <Form.Input type='date' fluid label='Date'  />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Input type='number' fluid label='nb participant' placeholder='22' />
      
      <Form.Field label='Sujet' control='select'>
        <option value='Symfony'>Symfony</option>
        <option value='React'>React</option>
      </Form.Field>
      
    </Form.Group>
  
    <Form.TextArea label='Description' placeholder='Votre description...' />
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
