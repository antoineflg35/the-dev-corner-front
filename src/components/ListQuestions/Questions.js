import {
  Button, Container, Item, Icon, Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ButtonAskQuestion from '../Home/ButtonAskQuestion';

import './styles.scss';

function Questions({ data }) {
  const departmentUser = useSelector((state) => state.user.department_user);
  const tagUser = useSelector((state) => state.user.techno_user);


  const filterQuestions = data.filter((question) => question.user.departement_number === departmentUser);

  const tagfiltre = tagUser.map((tag) => tag.techno);

  const filtre = filterQuestions.filter((question) => (question.tag.filter(({ techno }) => tagfiltre.includes(techno))));

  return (

    <Container className="list_questions">
      <Item.Group divided>

        {filtre.map((question) => (
          <Item key={question.id} className="questions">
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
                  <Button circular floated="right" primary>
                    Répondre à la question
                    <Icon name="chevron right" />
                  </Button>
                  {
                    question.tag.map((tag)=><Label keu={tag.id}>{tag.techno}</Label>)
                  }
                  <Label> Département : {departmentUser}</Label>
                </Item.Extra>
              </Link>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      <ButtonAskQuestion />
    </Container>
  );
}

export default Questions;
