import Questions from './Questions';
import ButtonAskQuestion from '../Home/ButtonAskQuestion';
import './styles.scss';

function ListQuestions() {
  return (
    <div className="list_questions">
      <Questions />
      <ButtonAskQuestion />
    </div>
  );
}

export default ListQuestions;
