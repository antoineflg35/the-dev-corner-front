import { List, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Footer() {
  return (
    <div className="footer">

      <List>
        <List.Item disabled href="#">
          © The Dev Corner, Inc
        </List.Item>
        <Link to="/contact">
          <List.Item>Contact</List.Item>
        </Link>
        <List.Item>Mentions légales</List.Item>
        <Link to="/team"> <List.Item>Notre équipe</List.Item></Link>
      </List>
    </div>
  );
}

export default Footer;
