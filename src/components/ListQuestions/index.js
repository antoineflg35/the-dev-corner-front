import Questions from './Questions';
import Informations from './Informations';
import ButtonAskQuestion from '../Home/ButtonAskQuestion';
import './styles.scss';

function ListQuestions() {
  return (
    <div className="page_questions">
      <Questions />
      <ButtonAskQuestion />
      <Informations />
    </div>
  );
}

export default ListQuestions;
