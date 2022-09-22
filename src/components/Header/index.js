import { useMediaQuery } from 'react-responsive';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import './styles.scss';

function Header() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <div className="header">
      {isBigScreen && <HeaderDesktop />}
      {isMobile && <HeaderMobile />}
    </div>
  );
}
export default Header;
