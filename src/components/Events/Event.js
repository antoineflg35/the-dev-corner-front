import {
  Button, Card, Image, Icon, List,Grid
} from 'semantic-ui-react';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Event() {
  const { id } = useParams();
  const events = useSelector((state) => state.events.list);
  console.log(events);
  return (

  
    <Card  fluid>
     <Grid  stackable>

     {
        events.map((event) => (
          <>

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
         
        <Link>
          <Button compact  primary>
            s'inscrire
          </Button>
          </Link>
        <Link to={`/events/details/${event.id}`}>

          <Button  compact color='pink'>
            voir plus
          </Button>
          </Link>
         
        </div>
          </Grid.Column>
      
          </Grid.Row>
        </Grid>
      </Card.Content>
      </Grid.Column>
      
          </Grid.Row>
            
          </>
        ))
      }

         
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
         <Link>
          <Button compact primary>
            s'inscrire
          </Button>
          </Link>
        <Link to={`/events/details/${event.id}`}>
          
          <Button compact color='pink'>
            voir plus
          </Button>
          </Link>
         
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
        <Card.Header><h2>3-event</h2></Card.Header>
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
         <Link>
          <Button compact primary>
            s'inscrire
          </Button>
          </Link>
        <Link to={`/events/details/${event.id}`}>
          
          <Button compact color='pink'>
            voir plus
          </Button>
          </Link>
         
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
        <Card.Header><h2>4-event</h2></Card.Header>
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
         <Link>
          <Button compact primary>
            s'inscrire
          </Button>
          </Link>
        <Link to={`/events/details/${event.id}`}>
          
          <Button compact color='pink'>
            voir plus
          </Button>
          </Link>
         
        </div>
          </Grid.Column>
      
          </Grid.Row>
        </Grid>
      </Card.Content>
      </Grid.Column>
      
          </Grid.Row>




          
        </Grid>


        
        
         
    </Card>
    
    
   
   




  );
}
export default Event;
