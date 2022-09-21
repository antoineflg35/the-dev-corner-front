// == Import
import { useEffect } from 'react';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
function App() {
  useEffect(
    () => {
      console.log('exécuté après le rendu initial');
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
