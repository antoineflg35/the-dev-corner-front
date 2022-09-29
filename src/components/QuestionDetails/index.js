import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { findQuestion } from '../../selectors/question';

import Content from './Content';
import AddComment from './AddComment';

import './styles.scss';

function QuestionDetails() {
  const { id } = useParams();
  console.log(id);
  const questions = useSelector((state) => state.questions.list);
  console.log(questions);
  // const findQuestion = question.find((element) => element.id === id);

  // eslint-disable-next-line eqeqeq
  const findQuestion = questions.filter((question) => question.id == id);
  const {title} = findQuestion;
  console.log(title);
  console.log(findQuestion);
  // const question = useSelector((state) => findQuestion(state.questions.list, id));

  return (
    <div className="questions_details">
      <Content questions={findQuestion} />
      <AddComment />
    </div>
  );
}

export default QuestionDetails;
