import { Menu } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

function Footers() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' });
  return (
    <div>
      {isMobile && <Footer />}
      {isBigScreen && (
      <Menu fixed='bottom' widths="9" size="">
        <Link to ='/contact'>
        <Menu.Item
          name="Nous Contacter"
        >
          Nous Contacter
        </Menu.Item>
        </Link>

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
