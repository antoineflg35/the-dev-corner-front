import { NavLink } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import './styles.scss';

function HeaderDesktop() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'link';
  return (
    <div className="header-desktop">
      <Menu size="small" stackable>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Menu.Item
            name="Accueil"
          />
        </NavLink>
        <NavLink
          to="/questions"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <Menu.Item
            name="Les questions"
          />
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <Menu.Item
            name="Les événements du coin"
          />
        </NavLink>
        <Menu.Item
          name="Les entreprises du coin"
        />
        <Menu.Item
          name="Le blog"
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="Mon profil"
          />
          <Menu.Item>
            <Button primary>Se déconnecter</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default HeaderDesktop;
