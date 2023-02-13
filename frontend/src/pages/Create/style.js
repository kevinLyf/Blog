import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 36pt;
  color: #f55050;
  font-weight: 700;
`;

export const Form = styled.form`
  margin-top: 2rem;
  width: 1200px;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Input = styled.input`
  width: 900px;
  max-width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: 2px solid #cccccc;
  padding: 0.6rem;
  font-size: 13pt;
`;

export const TextArea = styled.textarea`
  width: 900px;
  max-width: 100%;
  height: 150px;
  padding: 0.6rem;
  font-size: 13pt;
  border-radius: 5px;
  border: 2px solid #cccccc;
  resize: vertical;
`;

export const Button = styled.button`
    width: 900px;
    max-width: 100%;
    height: 3rem;
    border-radius: 5px;
    color: #fff;
    font-size: 15pt;
    font-weight: 600;
    background-color: #f55050;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
        transition: all .2s ease;
        background-color: #e05050;
    }
`;
