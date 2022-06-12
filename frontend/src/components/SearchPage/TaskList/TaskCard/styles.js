import styled from 'styled-components';

export const Root = styled.div`
  max-width: 840px;
  max-height: 540px;
  
  margin-bottom: 36px;
  
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div`
  padding: 20px 100px 30px 30px;
  
  display: flex;
  flex-direction: column;
  
  .title {
    text-transform: uppercase;
    font-size: 24px;
    font-family: 'Rubik Medium', self;
  }
  
  .promoter {
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'Rubik Medium';
    color: ${({ theme }) => theme.black};
  }
`;

export const Image = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;

    background-position: center center;
    background-size: cover;
  }
`;



