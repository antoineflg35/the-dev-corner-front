import { List } from 'semantic-ui-react';

function Footer() {
  return (
    <div>
      <List floated="right" horizontal>
        <List.Item disabled href="#">
          © The Dev Corner, Inc
        </List.Item>
        <List.Item href="#">Contact</List.Item>
        <List.Item href="#">Mentions légales</List.Item>
        <List.Item href="#">Contact</List.Item>
      </List>

      <List horizontal>
        <List.Item href="#">About Us</List.Item>
      </List>
    </div>
  );
}

export default Footer;
