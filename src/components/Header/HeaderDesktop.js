import { Button, Menu } from 'semantic-ui-react';

function HeaderDesktop() {
  return (
    <div>
      <Menu size="small" stackable>
        <Menu.Item
          name="Accueil"
        />
        <Menu.Item
          name="Les questions"
        />
        <Menu.Item
          name="Les événements du coin"
        />
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
