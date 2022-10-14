import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

function ButtonAddEvent() {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div class="button_ask_question">
      <Link to="/events/add">
        <Button
          content="Créer un événement"
          primary
          circular
        />
      </Link>
    </div>
  );
}

export default ButtonAddEvent;
