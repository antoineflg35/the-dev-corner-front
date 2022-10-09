import { Menu } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import Footer from '../Footer';

function Footers() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' });
  return (
    <div>
      {isMobile && <Footer />}
      {isBigScreen && (
      <Menu fixed='bottom' widths="9" size="">
        <Menu.Item
          name="Nous Contacter"
        >
          Nous Contacter
        </Menu.Item>

        <Menu.Item
          name=" Mentions Légales"
        >
          Mentions Légales
        </Menu.Item>

      </Menu>
      )}

    </div>

  );
}

export default Footers;
