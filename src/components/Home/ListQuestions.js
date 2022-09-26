import {
  List, Card,
} from 'semantic-ui-react';

function ListQuestions() {
  return (

    <Card.Group centered>

      <Card>
        
        <Card.Content  >
          <List>
            <List.Item>
              <List.Icon name="question" />
              <List.Content>
                <List.Header as="a">Question 1</List.Header>
                <List.Description>
                  An excellent polish restaurant, quick delivery and hearty, filling
                  meals.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="question" />
              <List.Content>
                <List.Header as="a">Question 2</List.Header>
                <List.Description>
                  A taste of Shaanxi's delicious culinary traditions, with delights like
                  spicy cold noodles and lamb burgers.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="question" />
              <List.Content>
                <List.Header as="a">Question 3</List.Header>
                <List.Description>
                  Greenpoint's best choice for quick and delicious sushi.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="question" />
              <List.Content>
                <List.Header as="a">Question 4</List.Header>
                <List.Description>
                  At night a bar, during the day a delicious brunch spot.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
        
        
       
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
