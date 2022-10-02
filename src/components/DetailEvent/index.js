import { Container, Header as HeaderSui, Grid, Button, Image} from 'semantic-ui-react';



import Header from "../Header";
import map from 'src/assets/map.jpg';
import Footers from '../Footers';


import './styles.scss';

function DetailEvent (){
  return (
    <div>
      


      <Container className='content'>
      <HeaderSui as="h2" size='huge'>Detail de l'evenement xxxx - Organisé par xxxx</HeaderSui>
      <HeaderSui color='blue' size='small'>DATE HEURE</HeaderSui>
       
      <p>
        Domestic dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. These sophisticated forms of social cognition and
        communication may account for their trainability, playfulness, and
        ability to fit into human households and social situations, and these
        attributes have given dogs a relationship with humans that has enabled
        them to become one of the most successful species on the planet today.
      </p>

      <p>
      
        Domestic dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. These sophisticated forms of social cognition and
        communication may account for their trainability, playfulness, and
        ability to fit into human households and social situations, and these
        attributes have given dogs a relationship with humans that has enabled
        them to become one of the most successful species on the planet today.
       
      </p>

      <HeaderSui color='blue' size='small'>25/200 Particpent</HeaderSui>
    



    <Grid stackable> 
    <Grid.Column floated='left' width={5}>
    Domestic dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. These sophisticated forms of social cognition and
        communication may account for their trainability, playfulness, and
        ability to fit into human households and social situations, and these
        attributes have given dogs a relationship with humans that has enabled
        them to become one of the most successful species on the planet today.
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
    <Image src={map}/>
    </Grid.Column>
  </Grid>

  <Container class="button_ask_question">
      <Button
        content="Participer a l'évenement"
        primary
      />
    </Container>
  </Container>

  


    </div>



  );
}
export default DetailEvent
