import {
  List, Image, Icon, Statistic,
} from 'semantic-ui-react';

function Informations() {
  return (
    <div className="informations_page_questions">
      <div className="questions_closed">
        <List>
          <List.Item>
            <Image avatar src="src\assets\images\image1.png" />
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
            <Image avatar src="/images/avatar/small/lindsay.png" />
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
            <Image avatar src="/images/avatar/small/matthew.png" />
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
            <Image avatar src="/images/avatar/small/jenny.jpg" />
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
            <Image avatar src="/images/avatar/small/veronika.jpg" />
            <List.Content>
              <List.Header as="a">Pseudo 5</List.Header>
              <List.Description>Has not watched anything recently</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
      <div className="statistics">
        <h1>Statistiques de la semaine</h1>
        <Statistic.Group widths="four">
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Saves</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value text>
              Three
              <br />
              Thousand
            </Statistic.Value>
            <Statistic.Label>Signups</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="plane" />5
            </Statistic.Value>
            <Statistic.Label>Flights</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Image src="/images/avatar/small/joe.jpg" className="circular inline" />
              42
            </Statistic.Value>
            <Statistic.Label>Team Members</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
}

export default Informations;
