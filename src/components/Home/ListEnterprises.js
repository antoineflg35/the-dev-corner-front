import { Button, Card, Image } from 'semantic-ui-react';

import entreprise from '../../assets/images/entreprise.jpg';

import './styles.scss';

function ListEnterprises() {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div class="cards_enterprises">
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              src={entreprise}
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                content="Découvrir l'entreprise"
                primary
              />
            </div>
          </Card.Content>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              src={entreprise}
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                content="Découvrir l'entreprise"
                primary
              />
            </div>
          </Card.Content>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              src={entreprise}
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                content="Découvrir l'entreprise"
                primary
              />
            </div>
          </Card.Content>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              src={entreprise}
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                content="Découvrir l'entreprise"
                primary
              />
            </div>
          </Card.Content>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              src={entreprise}
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                content="Découvrir l'entreprise"
                primary
              />
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default ListEnterprises;
