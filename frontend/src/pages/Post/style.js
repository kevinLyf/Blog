import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 1380px;
  max-width: 100%;
  min-height: 200px;
  max-height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1rem;
`;

export const PostContainer = styled.div`
  width: 1380px;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.6rem;
`;

export const PostExtraInfomation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin: 0.7rem 0rem;
`;

export const CreateAt = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14pt;
  color: #a9a9a9;
  text-align: end;
`;

export const Title = styled.h1`
  color: #121212;
  font-size: 25pt;
  font-weight: 600;

  @media (max-width: 855px) {
    font-size: 17pt;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 18pt;
  color: #585858;
  font-weight: 600;

  @media (max-width: 855px) {
    font-size: 14pt;
  }
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-size: 14pt;
  color: #585858;

  @media (max-width: 855px) {
    font-size: 15pt;
  }
`;
