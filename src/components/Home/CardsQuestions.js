import { useSelector } from 'react-redux';
import ListQuestions from './ListQuestions';

function CardsQuestions() {
  const data = useSelector((state) => state.questions.list);
  return (
    <ListQuestions data={data} />
  );
}
export default CardsQuestions;
