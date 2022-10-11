import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

function ButtonAskQuestion() {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div class="button_ask_question">
      <Link to="/questions/add">
        <Button
          content="Poser une question"
          primary
          circular
        />
      </Link>
    </div>
  );
}

export default ButtonAskQuestion;
