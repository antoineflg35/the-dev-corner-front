import Content from './Content';
import AddComment from './AddComment';
import './styles.scss';

function QuestionDetails() {
  return (
    <div className="questions_details">
      <Content />
      <AddComment />
    </div>
  );
}

export default QuestionDetails;
