// == Import
import './styles.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../actions/questions';
import Header from '../Header';
import Home from '../Home';
import Presentation from '../Presentation';
import ListQuestions from '../ListQuestions';
import AddQuestion from '../AddQuestion';
import QuestionDetails from '../QuestionDetails';
import Login from '../Login';
import User from '../User';
import DetailEvent from '../DetailEvent';
import Events from '../Events';
import NotFound from '../NotFound';
import NotConnected from '../NotConnected';
import Footer from '../Footer';


// == Composant
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const question = useSelector((state) => (state.questions.list));


  const navigate = useNavigate();
  // First page to display depending on whether the user is logged in or not
  useEffect(() => {
    if (token) {
      navigate('/');
      dispatch(fetchQuestions());
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
           path="/user"
           element={<User />}
         />
         <Route path="*" element={<NotConnected />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
      <Footer />
    </div>
  );
}

// == Export
export default App;
