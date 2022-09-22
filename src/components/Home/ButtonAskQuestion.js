import { Button } from 'semantic-ui-react';
import './styles.scss';

function ButtonAskQuestion() {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div class="button_ask_question">
      <Button
        content="Poser une question"
        primary
      />
    </div>
  );
}

export default ButtonAskQuestion;
