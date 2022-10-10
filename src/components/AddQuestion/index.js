import {
  Container, Form, TextArea, Button,
} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { useEffect } from 'react';
import { updateFieldAddQuestions, addQuestion } from '../../actions/questions';
import { fetchListTag } from '../../actions/newUser';

import './styles.scss';

function AddQuestion() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.questions.titleNewQuestion);
  const description = useSelector((state) => state.questions.descriptionNewQuestion);
  const tag = useSelector((state) => state.questions.tagNewQuestion);
  const tagQuestions = useSelector((state) => state.newUser.tag);
  const createdQuestion = useSelector((state) => state.questions.createdQuestion);

  useEffect(() => {
    dispatch(fetchListTag());
  }, []);

  // useEffect(() => {
  //   navigate('/questions');
  // }, [createdQuestion]);

  return (
    <div className="add_questions">

      <h2>Ajouter une question</h2>
      <Container>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(addQuestion());
          }}
        >
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

                {
                  tagQuestions.map((tag) => <option value={tag.techno}>{tag.techno}</option>)
                }
              </Form.Field>
            </div>

            {description.length >= 60 ? (
              <Link to="/questions">
                <Button
                  content="Poser une question"
                  primary
                />
              </Link>
            )
              : (
                <Link to="/error">
                  <Button
                    content="Poser une question"
                    primary
                  />
                </Link>
              )}

          </Form.Field>
        </Form>
      </Container>
    </div>
  );
}

export default AddQuestion;
