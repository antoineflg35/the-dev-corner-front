import { List, Menu } from 'semantic-ui-react';
import './styles.scss';
function Footer() {
  return (
    <div className="footer">

      <List>
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
