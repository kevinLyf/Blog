import styled from "styled-components";

export const Logo = styled.div`
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30pt;
    color: #ff0505;
    font-family: "Comfortaa", sans-serif;
  }
`;

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background-color: #fff;
  z-index: 20;
  position: sticky;
  top: 0;
`;

export const NavBar = styled.nav`
  width: 1400px;
  max-width: 100%;
  padding: 0 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const Li = styled.li``;

export const ButtonLogin = styled.button`
  width: 6rem;
  height: 2.7rem;
  font-size: 12pt;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #f55050;
  color: #f55050;
  cursor: pointer;
  display: ${(props) => props.display};

  &:hover {
    transition: all 0.2s ease;
    background-color: #f55050;
    color: #fff;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
export const ButtonRegister = styled.button`
  width: 6rem;
  height: 2.7rem;
  font-size: 12pt;
  border-radius: 5px;
  background-color: #f55050;
  border: 2px solid transparent;
  color: #fff;
  cursor: pointer;
  display: ${(props) => props.display};

  &:hover {
    transition: all 0.2s ease;
    background-color: #e05050;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ButtonMenu = styled.button`
  display: none;
  background-color: transparent;
  font-size: 2.4rem;
  color: #f55050;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.2;
`;

export const Menu = styled.div`
  width: 20rem;
  max-width: 100%;
  z-index: 11;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: #f5f5f5;
  ul {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  li {
    width: 100%;
    border-bottom: 1px solid gray;
    padding: 0.6rem 0.6rem;
  }
`;

export const MenuCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.6rem;
  background-color: transparent;
`;

export const MenuButtonCreate = styled.button`
  width: 100%;
  height: 2.7rem;
  font-size: 12pt;
  border-radius: 5px;
  background-color: #f55050;
`;

export const MenuDivLogout = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.6rem;
`;

export const MenuAsideButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  padding: 1rem;
  gap: 6px;
  background-color: transparent;
  display: ${(props) => props.display};
  font-size: 12pt;
`;
