import styled from 'styled-components';

export const CardBox = styled.div`
  width: 400px;
  height: 560px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 230px;
  min-height: 190px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px 5px 0px 0px;
`;

export const CardInformation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex-direction: column;
  padding: 0.8rem 1rem;
`;

export const CardTime = styled.span`
  color: #a1a1a1;
`;
export const CardExtraInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTag = styled.span`
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const CardTitle = styled.h4`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
  width: 100%;
  font-size: 14pt;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  font-size: 11pt;
  font-size: #f9f9fa;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
`;

export const CardLink = styled.div`
  position: absolute;
  bottom: 15px;
  a {
    color: #f55050;
    text-transform: uppercase;
    letter-spacing: 0.02rem;
    font-weight: 500;
  }
`;

export const CardAdminTools = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 15px;
  right: 1rem;
`;

export const ButtonAdmin = styled.button`
  font-size: 12pt;
  background-color: transparent;
  cursor: pointer;

`;
