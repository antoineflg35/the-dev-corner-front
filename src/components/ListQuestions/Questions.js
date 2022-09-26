import { Button, Card } from 'semantic-ui-react'
import './styles.scss';

function Questions() {
  return (
    <div className='questions' >
  <Card.Group className='card_question' >
    <Card className='card_question_details' >
      <Card.Content>
        <Card.Header>Quelle est la différence entre Node.js et PHP ?</Card.Header>
        <Card.Meta>Utilisateur n°1 - Département XX</Card.Meta>
        <Card.Meta>JS</Card.Meta>
        <Card.Description>
          Je me pose souvent la question de la différence entre ces deux concepts, je sais que Node Js n'est pas un langage mais...
        </Card.Description>
      </Card.Content>
    </Card>
     <div className='card_question_button'>
          <Button content="Répondre à la question une question"
        color='green'>

          </Button>
        </div>
  </Card.Group>
  </div>
  )
}

export default Questions;
