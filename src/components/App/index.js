// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../../actions/questions';
import Header from '../Header';
import Home from '../Home';
import ListQuestions from '../ListQuestions';
import AddQuestion from '../AddQuestion';
import QuestionDetails from '../QuestionDetails';
import Footer from '../Footer';
// == Composant
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchQuestions());
  // }, []);

  return (
    <div className="app">
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
