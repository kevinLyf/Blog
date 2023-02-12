import styled from 'styled-components';

export const Logo = styled.div`
  a {
    font-size: 20pt;
    color: #121212;
  }
`;

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background-color: #fff;
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

  &:hover {
    transition: all 0.2s ease;
    background-color: #e05050;
  }
`;

export const Title = styled.h4`
  font-size: 27pt;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 100%;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  padding: 0.6rem;
  font-size: 12pt;
  border: 2px solid #cccccc;

  &:focus {
    transition: all 0.3s ease;
    border: 2px solid #f55050;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  background-color: #f55050;
  color: #fff;
  font-size: 13pt;
  font-weight: 500;
  margin-top: 0.3rem;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease;
    background-color: #e05050;
  }
`;

export const ErrorWarn = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 4rem;
  background-color: #c05050;
  border-radius: 5px;
  border-left: 8px solid #f55050;
  padding: 0.4rem;

  span {
    color: #fff;
    font-size: 13pt;
  }
`;
