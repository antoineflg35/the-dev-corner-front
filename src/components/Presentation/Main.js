import { Card, List } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Main() {

  const {id}= useParams();
  return (
    <div className="main">

      <Card.Group centered stackable>

        <Card>
          <Card.Content>
            <List>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                  <Link to = {`/questions/details/${id}`}>
                  <List.Header as="a">Question 1</List.Header>
                  </Link>
                  <List.Description>
                    An excellent polish restaurant, quick delivery and hearty, filling
                    meals.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                <Link to = {`/questions/details/${id}`}>

                  <List.Header as="a">Question 2</List.Header>
                  </Link>
                  <List.Description>
                    A taste of Shaanxi's delicious culinary traditions, with delights like
                    spicy cold noodles and lamb burgers.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                <Link to = {`/questions/details/${id}`}>

                  <List.Header as="a">Question 3</List.Header>
                  </Link>
                  <List.Description>
                    Greenpoint's best choice for quick and delicious sushi.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="question" />
                <List.Content>
                <Link to = {`/questions/details/${id}`}>

                  <List.Header as="a">Question 4</List.Header>
                  </Link>
                  <List.Description>
                    At night a bar, during the day a delicious brunch spot.
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <List>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>
                <Link to = {`/events/details/${id}`}>

                  <List.Header as="a">Evénement 1</List.Header>
                  </Link>
                  <List.Description>
                    An excellent polish restaurant, quick delivery and hearty, filling
                    meals.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>
                <Link to = {`/events/details/${id}`}>

                  <List.Header as="a">Evénement 2</List.Header>
                  </Link>
                  <List.Description>
                    A taste of Shaanxi's delicious culinary traditions, with delights like
                    spicy cold noodles and lamb burgers.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>
                <Link to = {`/events/details/${id}`}>

                  <List.Header as="a">Evénement 3</List.Header>
                  </Link>
                  <List.Description>
                    Greenpoint's best choice for quick and delicious sushi.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>
                <Link to = {`/events/details/${id}`}>

                  <List.Header as="a">Evénement 4</List.Header>
                  </Link>
                  <List.Description>
                    At night a bar, during the day a delicious brunch spot.
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Card.Content>
        </Card>

      </Card.Group>
    </div>

  );
}

export default Main;
