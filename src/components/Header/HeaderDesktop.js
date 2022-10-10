import { NavLink } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/user';

function HeaderDesktop() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'link';
  const dispatch = useDispatch();

  return (
    <div className="header-desktop">
      <Menu size="small" stackable>
        <NavLink
          to="/"
        >
          <Menu.Item
            name="Accueil"
          />
        </NavLink>

        <NavLink
          to="/questions"
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        >
          <Menu.Item
            name="Les questions"
          />
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        >
          <Menu.Item
            name="Les événements du coin"
          />
        </NavLink>
        <NavLink
          to="/entreprise"
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        >

          <Menu.Item
            name="Les entreprises du coin"
          />
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        >

          <Menu.Item
            name="Le blog"
          />
        </NavLink>

        <Menu.Menu position="right">
          <Menu.Item
            name="Mon profil"
          />
          <Menu.Item>
            <Button
              onClick={() => {
                dispatch(logout());
              }}
              primary
            >Se déconnecter
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default HeaderDesktop;
