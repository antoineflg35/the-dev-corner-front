// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import Footer from '../Footer';
// == Composant
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/presentation"
          element={<Presentation />}
        />
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
      </Routes>
      <Footer />

    </div>
  );
}

// == Export
export default App;
