import {
  List, Image, Header, Segment, Statistic
} from 'semantic-ui-react';

import avatar from '../../assets/images/avatar.jpeg';

function Informations() {
  const square = { width: 175, height: 175 };
  return (
    <div className="informations_page_questions">
      <div className="questions_closed">
        <List>
          <Header as="h3" textAlign="center" block color="blue">
            Les dernières questions cloturées
          </Header>
          <List.Item>
            <Image avatar src={avatar} />
            <List.Content>
              <List.Header as="a">Pseudo 1</List.Header>
              <List.Description>
                Last seen watching{' '}
                <a>
                  <b>Arrested Development</b>
                </a>{' '}
                just now.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={avatar} />
            <List.Content>
              <List.Header as="a">Pseudo 2</List.Header>
              <List.Description>
                Last seen watching{' '}
                <a>
                  <b>Bob's Burgers</b>
                </a>{' '}
                10 hours ago.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={avatar} />
            <List.Content>
              <List.Header as="a">Pseudo 3</List.Header>
              <List.Description>
                Last seen watching{' '}
                <a>
                  <b>The Godfather Part 2</b>
                </a>{' '}
                yesterday.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={avatar} />
            <List.Content>
              <List.Header as="a">Pseudo 4</List.Header>
              <List.Description>
                Last seen watching{' '}
                <a>
                  <b>Twin Peaks</b>
                </a>{' '}
                3 days ago.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={avatar} />
            <List.Content>
              <List.Header as="a">Pseudo 5</List.Header>
              <List.Description>Has not watched anything recently</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
      <div className="statistics">
        <Header as="h3" textAlign="center" block color="blue">
          Les statistiques de la semaine
        </Header>
        <Statistic>
          <Statistic.Value>14</Statistic.Value>
          <Statistic.Label>Questions posées</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>33</Statistic.Value>
          <Statistic.Label>Réponses</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>React</Statistic.Value>
          <Statistic.Label>catégorie la plus demandée</Statistic.Label>
        </Statistic>
      </div>
    </div>
  );
}

export default Informations;
