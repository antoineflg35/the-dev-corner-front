import { useParams, Link } from 'react-router-dom';
import {
  List, Card,
} from 'semantic-ui-react';

function ListQuestions({ data }) {
  // const { id } = useParams(data);
  return (

    <Card.Group centered>
      <Card>
        {
        data.slice(data.length-5).map((question) => (
          <Link to={`/questions/details/${question.id}`}>
            <Card.Content>
              <List>
                <List.Item>
                  <List.Icon name="question" />
                  <List.Content>
                    <List.Header as="a">{question.title} {question.user.pseudo}</List.Header>
                    <List.Description>
                      {question.description.slice(0,60)}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Content>
          </Link>
        ))
      }

      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Les statistiques</Card.Header>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
            Steve wants to add you to the group <strong>best friends</strong>
            Steve wants to add you to the group <strong>best friends</strong>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>

  );
}

export default ListQuestions;
