import { Link, useNavigate } from "react-router-dom";
import {
  ButtonLogin,
  ButtonMenu,
  ButtonRegister,
  ContainerMenu,
  HeaderBar,
  Li,
  Logo,
  Menu,
  MenuButtonCreate,
  MenuCloseButton,
  MenuDivLogout,
  MenuAsideButton,
  NavBar,
  Ul,
} from "./style";
import { FaFire } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaRegNewspaper, FaHome } from "react-icons/fa";

const Header = ({ displayAuth, displayAdmin }) => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    isMenu ? setIsMenu(false) : setIsMenu(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
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
          <Link to="/create">
            <ButtonRegister display={displayAdmin}>Create</ButtonRegister>
          </Link>

          <Li>
            <ButtonRegister
              display={displayAuth === "none" ? "block" : "none"}
              onClick={handleLogout}
            >
              Log out
            </ButtonRegister>
          </Li>

          <Li>
            <ButtonMenu onClick={handleMenu}>
              <HiOutlineMenuAlt3 />
            </ButtonMenu>
          </Li>
        </Ul>
      </NavBar>
      <Menu style={{ display: isMenu ? "block" : "none" }}>
        <MenuCloseButton>
          <GrFormClose color="#f55050" onClick={handleMenu} />
        </MenuCloseButton>
        <Link to="/">
          <MenuAsideButton>
            <FaHome />
            Home
          </MenuAsideButton>
        </Link>
        <Link to="/create">
          <MenuAsideButton display={displayAdmin === "block" ? "flex" : "none"}>
            <FaRegNewspaper />
            Create
          </MenuAsideButton>
        </Link>
        <MenuDivLogout>
          <MenuAsideButton
            onClick={handleLogout}
            display={displayAuth === "none" ? "flex" : "none"}
          >
            <FiLogOut size={17} />
            Log out
          </MenuAsideButton>
        </MenuDivLogout>
      </Menu>
      <ContainerMenu
        onClick={handleMenu}
        style={{ display: isMenu ? "block" : "none" }}
      ></ContainerMenu>
    </HeaderBar>
  );
};

export default Header;
