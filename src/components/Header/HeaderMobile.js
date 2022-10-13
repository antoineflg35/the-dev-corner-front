import {
  Dropdown, Menu, Button,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, loginBackOffice } from '../../actions/user';



function HeaderMobile() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'link';
  const role = useSelector((state) => state.user.role);

  const dispatch = useDispatch();
  return (
    <div>
      <Menu attached="top" pointing>
        <Dropdown item icon="home" simple>
          <Dropdown.Menu>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            >
              <Dropdown.Item>Accueil</Dropdown.Item>
            </NavLink>
            <NavLink
              to="/questions"
              className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            >
              <Dropdown.Item>Les questions
              </Dropdown.Item>
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            >
              <Dropdown.Item>Les événements du coin</Dropdown.Item>
            </NavLink>
            <NavLink
              to="/enterprise"
              className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            >
              <Dropdown.Item>Les entreprises du coin</Dropdown.Item>
            </NavLink>
            <Dropdown.Divider />
            {
                role === 'ROLE_ADMIN'
                && (
                <Menu.Item>
                  <Button
                    circular
                    color="green"
                    onClick={() => {
                      dispatch(loginBackOffice());
                    }}
                  >Accès au Back Office
                  </Button>
                </Menu.Item>
                )
              }
            <Button
              fluid
              content="Se déconnecter"
              primary
              onClick={() => {
                dispatch(logout());
              }}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

    </div>
  );
}

export default HeaderMobile;
