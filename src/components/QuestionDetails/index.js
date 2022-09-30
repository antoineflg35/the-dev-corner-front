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
  console.log(id);
  const questions = useSelector((state) => state.questions.list);
  console.log(questions);


  // eslint-disable-next-line eqeqeq
  const findQuestion = questions.filter((question) => question.id == id);
  const { title } = findQuestion;
  // console.log(title);
  // console.log(findQuestion);
  // const question = useSelector((state) => findQuestion(state.questions.list, id));

  return (
    <div className="questions_details">
      <Content questions={findQuestion} />
      <AddComment idQuestion={id} />
    </div>
  );
}

export default QuestionDetails;
