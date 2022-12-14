// == Import
import './styles.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsLastFive } from '../../actions/questions';
import { fetchEventsLastFive } from '../../actions/events';
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
import MessageError from '../MessageError';
import SuccessMessage from '../SuccessMessage';
import SuccessEvents from '../SuccessEvents';
import NotConnected from '../NotConnected';
import Contact from '../Contact';
import Footers from '../Footers';
import Team from '../Team';
import PageUnderConstruction from '../PageUnderConstruction';
import { fetchQuestions } from '../../actions/questions';
import { fetchEvents } from '../../actions/events';

// == Composant
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => (state.user.token));
 

  const navigate = useNavigate();
  // First page to display depending on whether the user is logged in or not
  useEffect(() => {
    if (token !== null) {
      navigate('/');
      // dispatch(loginToken());
      // dispatch(fetchQuestions());
      // dispatch(fetchEvents());
    }
    else {
      dispatch(fetchQuestionsLastFive());
      dispatch(fetchEventsLastFive());
    }
  }, [token]);

  return (
    <div className="app">
      {/* Routes if user is not logged in */}
      {!token
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
           path="/contact"
           element={<Contact />}
         />
         <Route
           path="/user"
           element={<User />}
         />
         <Route path="*" element={<NotConnected />} />
         <Route path="/team" element={<Team />} />
       </Routes>
       )}
      {/* Routes if user is logged in */}
      {token
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
            <Route
              path="/error"
              element={<MessageError />}
            />
            <Route
              path="/success-question"
              element={<SuccessMessage />}
            />
            <Route
              path="/success-events"
              element={<SuccessEvents />}
            />
            <Route
              path="/enterprise"
              element={<PageUnderConstruction />}
            />
            <Route
              path="/blog"
              element={<PageUnderConstruction />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/team" element={<Team />} />
            <Route
           path="/contact"
           element={<Contact />}
         />
          </Routes>
        </>
      )}

      <Footers />

    </div>
  );
}

// == Export
export default App;
