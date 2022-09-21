// == Import
import { useEffect } from 'react';
import axios from 'axios';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
function App() {
  useEffect(
    () => {
      axios.get('http://localhost:8000/api/v1/test')
        .then((response) => {
          // en cas de réussite de la requête
          console.log(response);
        })
        .catch((error) => {
          // en cas d’échec de la requête
          console.log(error);
        })
        .then(() => {
          // dans tous les cas
        });
    },
    [],
  );
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default App;
