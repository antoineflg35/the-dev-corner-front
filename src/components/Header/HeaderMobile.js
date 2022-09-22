import {
  Dropdown, Menu, Button,
} from 'semantic-ui-react';

function HeaderMobile() {
  return (
    <div>
      <Menu attached="top" pointing>
        <Dropdown item icon="home" simple>
          <Dropdown.Menu>
            <Dropdown.Item>Accueil</Dropdown.Item>
            <Dropdown.Item>Les questions</Dropdown.Item>
            <Dropdown.Item>Les événements du coin</Dropdown.Item>
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
