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
import Footer from '../Footer';
// == Composant
function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.logged);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  useEffect(() => {
    if (loggedUser) {
      navigate('/');
    }
    else {
      <>
        <Routes>
          <Route
            path="/presentation"
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
          <Route path="*" element={<NotFound />} />
        </Routes><Footer />
      </>;
    }
  }, [loggedUser]);

  return (
    <div className="app">
      {/* Routes si l'utilisateur est connecté */}
      {loggedUser
      && (
        <>
          <Header />
          <Routes>
            <Route
              path="/user"
              element={<User />}
            />
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
              path="/questions/details"
              element={<QuestionDetails />}
            />
            <Route
              path="/questions/add"
              element={<AddQuestion />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

// == Export
export default App;
