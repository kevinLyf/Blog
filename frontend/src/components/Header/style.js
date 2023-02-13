import styled from 'styled-components';

export const Logo = styled.div`
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30pt;
    color: #ff0505;
    font-family: 'Comfortaa', sans-serif;
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
`;
