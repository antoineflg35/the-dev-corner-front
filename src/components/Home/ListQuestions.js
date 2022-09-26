import {
  List, Card,
} from 'semantic-ui-react';

function ListQuestions({ data }) {
  return (

    <Card.Group centered>
      <Card>
        {
        data.map((question) => (
          <Card.Content>
            <List>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                  <List.Header as="a">{question.title}</List.Header>
                  <List.Description>
                    {question.description}
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Card.Content>
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
