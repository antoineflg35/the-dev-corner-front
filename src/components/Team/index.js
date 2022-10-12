import { Link } from 'react-router-dom';
import {
  Header, Card, Icon, Image, Button
} from 'semantic-ui-react';
import './styles.scss';
import photoAntoine from '../../assets/avatar_antoine.jpg';

function Team() {
  return (
    <div>
      <div className="header-presentation">
        <Header as="h1" size="huge" centred textAlign="center"> L'équipe de <span><p className="span">The Dev Corner</p></span></Header>
        <Link to="/">
          <Button className="button-login" size="large" circular primary>Retour à la page présentation</Button>
        </Link>
      </div>
      <div className="card-team">
        <Card.Group>
          <Card className="card">
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Trésor</Card.Header>
              <Card.Description>
                Lead développeur back
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="linkedin" />
                Voir le profil Linkedin
              </a>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Paul</Card.Header>
              <Card.Description>
                Scrum Master
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="linkedin" />
                Voir le profil Linkedin
              </a>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Archraf</Card.Header>
              <Card.Description>
                Lead développeur front
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="linkedin" />
                Voir le profil Linkedin
              </a>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image src={photoAntoine} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Antoine</Card.Header>
              <Card.Description>
                Product Owner
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="linkedin" />
                Voir le profil Linkedin
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
}

export default Team;
