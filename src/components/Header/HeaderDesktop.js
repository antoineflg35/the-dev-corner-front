import { NavLink, Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/user';

function HeaderDesktop() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'link';
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.role);

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
          to="/enterprise"
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

        <Menu.Menu
          position="right"
        >
          {
                role === 'ROLE_ADMIN'
                && (
                  <a href="http://localhost:8001/back/home">
                    <Menu.Item>
                      <Button
                        circular
                        color='green'
                      >Accès au Back Office
                      </Button>
                    </Menu.Item>
                  </a>
                )
              }
          <Menu.Item>
            <Button
              circular
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
