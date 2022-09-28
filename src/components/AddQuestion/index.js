import {
  Container, Form, TextArea, Input, Button, Select,
} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { updateFieldAddQuestions } from '../../actions/questions';

import './styles.scss';

function AddQuestion() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.questions.titleNewQuestion);
  const description = useSelector((state) => state.questions.descriptionNewQuestion);
  const tag = useSelector((state) => state.questions.tagNewQuestion);

  return (
    <div className="add_questions">

      <h2>Ajouter une question</h2>
      <Container>
        <Form>
          <Form.Field>
            <div className="title-question">
              <TextArea
                value={title}
                placeholder="Titre de la question"
                onChange={(event) => {
                  const action = updateFieldAddQuestions(event.target.value, 'titleNewQuestion');
                  dispatch(action);
                }}
              />
            </div>
            <div className="content-question">
              <TextArea
                value={description}
                placeholder="Contenu de la question"
                onChange={(event) => {
                  const action = updateFieldAddQuestions(event.target.value, 'descriptionNewQuestion');
                  dispatch(action);
                }}
              />
            </div>
            <div className="tag-question">
              <Form.Field
                required
                value={tag}
                label="Technologie concernée par la question"
                control="select"
                onChange={(event) => {
                  const action = updateFieldAddQuestions(event.target.value, 'tagNewQuestion');
                  dispatch(action);
                }}
              >
                <option value="" />
                <option value="JS">JS</option>
                <option value="PHP">PHP</option>
                <option value="REACT">REACT</option>
                <option value="SYMFONY">SYMFONY</option>
              </Form.Field>
              {/* <Input
                value={tag}
                list="languages"
                placeholder="Choose language..."
                type="select"
                onChange={(event) => {
                  const action = updateFieldAddQuestions(event.target.value, 'tagNewQuestion');
                  dispatch(action);
                }}
              />
              <datalist id="languages">
                <option>PHP</option>
                <option>JS</option>
                <option>REACT</option>
                <option>Symphony</option>
              </datalist> */}
            </div>
            <Button
              content="Poser une question"
              primary
            />
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
}

export default AddQuestion;
