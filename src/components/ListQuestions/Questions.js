import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Questions({ data }) {
  return (
    <Card.Group>
      {data.map((question) => (
        <Link to={`/questions/details/${question.id}`}>
          <Card
            floated="right"
            size="mini"
          >
            <Card.Content>
              <Card.Header>{question.title.slice(0, 25)}...</Card.Header>
              <Card.Meta>{question.pseudo}
              </Card.Meta>
              <Card.Meta> {question.user.tags[0].techno}</Card.Meta>
              <Card.Description>
                {question.description.slice(0, 25)}
              </Card.Description>
            </Card.Content>
            <div className="card_question_button">
              <Button
                content="Répondre à la question"
                color="green"
              />
            </div>
          </Card>
        </Link>
      ))}
    </Card.Group>
  );
}

export default Questions;
