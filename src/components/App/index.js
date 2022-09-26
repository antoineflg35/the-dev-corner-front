// == Import
import './styles.scss';

import DetailEvent from '../DetailEvent';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Presentation from '../Presentation';
import Events from '../Events';
import AddEvent from '../AddEvent';

// == Composant
function App() {
  const logged = false;
  const Event = true;
  return (
    <div className="app">
      {/* {logged &&  <>
      <Header />
      <Home />
      <Footer />
      </>
      } */}

      {/* < Presentation />   */}
      {/* {Event && <Events />}  */}

      <DetailEvent />

      {/* <AddEvent /> */}

    </div>
  );
}

// == Export
export default App;

// 'http://127.0.0.1:8000/api/v1/questions'
