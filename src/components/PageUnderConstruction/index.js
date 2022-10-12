import {
  Image, Header, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import logo from 'src/assets/page_under_contruction.jpg';

// == Composant
function PageUnderConstruction() {
  return (
    <div>
      <Header as="h1" size="huge" centred textAlign="center"> Page en cours de construction </Header>
      <Link to="/">
        <Button className="button-login" size="large" circular primary>Retour à la page d'accueil</Button>
      </Link>
      <Image src={logo} size="big" centered />
    </div>
  );
}

// == Export
export default PageUnderConstruction;
