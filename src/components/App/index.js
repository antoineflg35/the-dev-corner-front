// == Import
import './styles.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, fetchQuestionsLastFive } from '../../actions/questions';
import { updateResponse } from '../../actions/response';
import { fetchEventsLastFive } from '../../actions/events';
import { fetchEvents } from '../../actions/events';

import Header from '../Header';
import Home from '../Home';
import Presentation from '../Presentation';
import ListQuestions from '../ListQuestions';
import AddQuestion from '../AddQuestion';
import AddEvent from '../AddEvent';
import QuestionDetails from '../QuestionDetails';
import Login from '../Login';
import User from '../User';
import DetailEvent from '../DetailEvent';
import Events from '../Events';
import NotFound from '../NotFound';
import NotConnected from '../NotConnected';
import Footers from '../Footers';

// == Composant
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const question = useSelector((state) => (state.questions.list));
  const loggedUser = useSelector((state) => (state.user.logged));
  // const response = useSelector((state)=>(state.response.description));
  // const loggedUser = false;

  const navigate = useNavigate();
  // First page to display depending on whether the user is logged in or not
  useEffect(() => {
    if (loggedUser) {
      navigate('/');
      dispatch(fetchQuestions());
      dispatch(fetchEvents());
    }
    else dispatch(fetchQuestionsLastFive())
    dispatch(fetchEventsLastFive());
  }, [loggedUser]);

  return (
    <div className="app">
      {/* Routes if user is not logged in */}
      {!loggedUser
       && (
       <Routes>
         <Route
           path="/"
           element={<Presentation />}
         />
         <Route
           path="/login"
           element={<Login />}
         />
         <Route
           path="/user"
           element={<User />}
         />
         <Route path="*" element={<NotConnected />} />
       </Routes>
       )}
      {/* Routes if user is logged in */}
      {loggedUser
      && (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/questions"
              element={<ListQuestions />}
            />
            <Route
              path="/events"
              element={<Events />}
            />

            <Route
              path="/events/details"
              element={<DetailEvent />}
            />
            <Route
              path="/questions/details/:id"
              element={<QuestionDetails />}
            />
            <Route
              path="/questions/add"
              element={<AddQuestion />}
            />
            <Route
              path="/events/add"
              element={<AddEvent />}
            />
            <Route
              path="/events/details/:id"
              element={<DetailEvent />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}

      <Footers />

    </div>
  );
}

// == Export
export default App;
