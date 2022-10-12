import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ListQuestions from './ListQuestions';
import { fetchQuestionsLastFive, loadingLastFiveHome } from '../../actions/questions';

function CardsQuestions() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loginToken());
    dispatch(fetchQuestionsLastFive());
  }, []);
  const data = useSelector((state) => state.questions.list);

  return (

    <ListQuestions data={data} key={data.id} />
  );
}
export default CardsQuestions;
