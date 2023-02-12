import { Link } from 'react-router-dom';
import {
  ButtonLogin,
  ButtonRegister,
  HeaderBar,
  Li,
  Logo,
  NavBar,
  Ul,
} from './style';

const Header = () => {
  return (
    <HeaderBar>
      <NavBar>
        <Logo>
          <Link to="/">Logo</Link>
        </Logo>
        <Ul>
          <Li>
            <Link to="/login">
              <ButtonLogin>Log in</ButtonLogin>
            </Link>
          </Li>
          <Li>
            <ButtonRegister>Sign up</ButtonRegister>
          </Li>
        </Ul>
      </NavBar>
    </HeaderBar>
  );
};

export default Header;
