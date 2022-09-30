import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Questions({ data }) {
  return (
    <div className="questions">
      <Card.Group stackable className="card_question">
        {data.map((question) => (
          <Link to={`/questions/details/${question.id}`}>
            <Card className="card_question_details">
              <Card.Content>
                <Card.Header>{question.title.slice(0,25)}...</Card.Header>
                <Card.Meta>{question.pseudo} -
                  Département {question.user.department.number}
                </Card.Meta>
                <Card.Meta> {question.user.tags[0].techno}</Card.Meta>
                <Card.Description>
                  {question.description.slice(0,25)}
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
    </div>
  );
}

export default Questions;
