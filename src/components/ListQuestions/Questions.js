import {
  Button, Card, Container, Item, Image, Icon, Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Questions({ data }) {
  return (

    <Container className="list_questions">
      <Item.Group divided>

        {data.map((question) => (
          <Item className="questions">
            <Item.Content>
              <Link to={`/questions/details/${question.id}`}>
                <Item.Header as="a">{question.title.slice(0, 25)}...</Item.Header>
              </Link>
              <Item.Meta>
                <span>{question.pseudo}</span>
              </Item.Meta>
              <Item.Description>
                {question.description.slice(0, 50)}...
              </Item.Description>
              <Link to={`/questions/details/${question.id}`}>
                <Item.Extra>
                  <Button floated="right" primary>
                    Répondre à la question
                    <Icon name="chevron right" />
                  </Button>
                  <Label>{question.user.tags[0].techno}</Label>
                </Item.Extra>
              </Link>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Container>
  );
}

export default Questions;
