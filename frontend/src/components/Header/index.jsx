import { Link, useNavigate } from 'react-router-dom';
import {
  ButtonLogin,
  ButtonRegister,
  HeaderBar,
  Li,
  Logo,
  NavBar,
  Ul,
} from './style';
import { FaFire } from 'react-icons/fa';

const Header = ({ displayAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    return window.location.reload();
  };

  return (
    <HeaderBar>
      <NavBar>
        <Logo>
          <Link to="/">
            <FaFire />
          </Link>
        </Logo>
        <Ul>
          <Li>
            <Link to="/login">
              <ButtonLogin display={displayAuth}>Log in</ButtonLogin>
            </Link>
          </Li>
          <Li>
            <Link to="/register">
              <ButtonRegister display={displayAuth}>Sign up</ButtonRegister>
            </Link>
          </Li>

          <Li>
            <ButtonRegister
              display={displayAuth === 'none' ? 'block' : 'none'}
              onClick={handleLogout}
            >
              Logout
            </ButtonRegister>
          </Li>
        </Ul>
      </NavBar>
    </HeaderBar>
  );
};

export default Header;
