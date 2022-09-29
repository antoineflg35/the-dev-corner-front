import { useSelector } from 'react-redux';
import Questions from './Questions';
import Informations from './Informations';
import ButtonAskQuestion from '../Home/ButtonAskQuestion';
import './styles.scss';

function ListQuestions() {
  const data = useSelector((state) => state.questions.list);
  return (
    <div className="page_questions">
      <Questions data={data} />
      <ButtonAskQuestion />
      <Informations />
    </div>
  );
}

export default ListQuestions;
