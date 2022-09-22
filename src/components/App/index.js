// == Import
import './styles.scss';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// == Export
export default App;
