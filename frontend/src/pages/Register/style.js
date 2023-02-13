import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
`;

export const Form = styled.form`
  width: 500px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  background-color: #eeeeee;
  border-radius: 5px;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  padding: 0.6rem;
  font-size: 12pt;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #f55050;
  color: #fff;
  font-weight: 500;
  font-size: 13pt;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease;
    background-color: #e05050;
  }

  &:disabled {
    transition: all 0.2s ease;
    background-color: #F17A7A;
  }
`;

export const Title = styled.h3`
  font-size: 20pt;
  font-weight: 500;
`;
