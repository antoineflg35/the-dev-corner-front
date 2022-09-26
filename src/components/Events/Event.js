import {
  Button, Card, Image, Icon, List,
} from 'semantic-ui-react';

function Event() {
  return (
    <List>
      <div className="top">

        1-Event

      </div>
      <div className="bottom">
        <span>
          An excellent polish restaurant, quick delivery and hearty, filling meals.

        </span>

        <p className="nbparticpe">
          deja 25 participants /200 participants
        </p>
        <div>
          <Button primary>voir plus</Button>
          <Button primary>s'inscrire</Button>
        </div>

      </div>

    </List>

  );
}
export default Event;
