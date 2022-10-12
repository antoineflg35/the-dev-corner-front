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
      <Menu fixed="bottom" widths="4" size="">
        <Menu.Item
          name="Nous Contacter"
        >
          <Link to="/contact">
            Nous Contacter
          </Link>
        </Menu.Item>
        <Menu.Item
          name=" Mentions Légales"
        >
          Mentions Légales
        </Menu.Item>

        <Menu.Item>
          <Link to="/team">
            Notre équipe
          </Link>
        </Menu.Item>

      </Menu>
      )}

    </div>

  );
}

export default Footers;
