import { useSelector, useDispatch } from 'react-redux';
import Questions from './Questions';
import Informations from './Informations';
import './styles.scss';
import { fetchQuestions } from '../../actions/questions';
import Loading from '../Loading';
import { useEffect } from 'react';

function ListQuestions() {
  const loadingQuestions = useSelector((state) => state.questions.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const data = useSelector((state) => state.questions.list);

  return (
    <div className="page_questions">
      {loadingQuestions === false && <Loading />}
      {loadingQuestions === true

      && (
      <>
       <div className="title">
          <h1><span>Liste des questions </span></h1>
        </div>
        <Questions data={...data} key={data.id} />
        {/* <Informations /> */}
      </>
      )}

    </div>
  );
}

export default ListQuestions;
