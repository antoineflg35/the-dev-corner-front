import {
  Dropdown, Menu, Button,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function HeaderMobile() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'link';
  return (
    <div>
      <Menu attached="top" pointing>
        <Dropdown item icon="home" simple>
          <Dropdown.Menu>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Dropdown.Item>Accueil</Dropdown.Item>
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              <Dropdown.Item>Les questions
              </Dropdown.Item>
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              <Dropdown.Item>Les événements du coin</Dropdown.Item>
            </NavLink>
            <Dropdown.Item>Les entreprises du coin</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Mon profil</Dropdown.Item>
            <Button
              fluid
              content="Se déconnecter"
              primary
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

    </div>
  );
}

export default HeaderMobile;
