// == Import
import { Image } from 'semantic-ui-react';


import logo from 'src/assets/404.jpg';


import './styles.scss';

// == Composant
function NotFound() {
  return <div className="not-found">
     <Image src={logo}  fluid />
  </div>
}

// == Export
export default NotFound;


 
