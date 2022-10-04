import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateId } from '../../actions/response';
// import { findQuestion } from '../../selectors/question';

import Content from './Content';
import AddComment from './AddComment';

import './styles.scss';

function QuestionDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateId(id));
  }, []);
  
  const questions = useSelector((state) => state.questions.list);

  // eslint-disable-next-line eqeqeq
  const findQuestion = questions.filter((question) => question.id == id);
  // const { responses } = findQuestion;
  const { responses } = findQuestion[0];

  return (
    <div className="questions_details">
      <Content questions={findQuestion} />
      <AddComment idQuestion={id} responses={responses} />
    </div>
  );
}

export default QuestionDetails;
