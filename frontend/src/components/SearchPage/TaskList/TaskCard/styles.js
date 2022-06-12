import styled from 'styled-components';
import {Button} from '../../../common/Button/styles';

export const Root = styled.div`
  max-width: 840px;
  max-height: 540px;
  
  margin-bottom: 36px;
  
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.white};
  
  .imageContainer {
    img {
      max-width: 100%;
      max-height: 100%;

      background-position: center center;
      background-size: cover;
    }
  }
`;

export const Content = styled.div`
  padding: 8px 30px 30px;
  
  display: flex;
  flex-direction: column;
  
  .title {
    margin-bottom: 16px;
    
    text-transform: uppercase;
    font-size: 24px;
    font-family: 'Rubik Medium';
  }
  
  .promoter {
    margin-bottom: 4px;
    
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'Rubik Medium';
    color: ${({ theme }) => theme.black};
  }

  .taskDescription {
    margin-bottom: 30px;
    
    font-size: 14px;
    font-family: 'Rubik';
    color: ${({ theme }) => theme.black};
  }  
  
  .dateAndTime {
    margin-bottom: 4px;
    
    font-size: 16px;
    font-weight: 700;
    font-family: 'Rubik';
    color: ${({ theme }) => theme.black};
  }

  .level {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Rubik';
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 12px
  }
`;

export const StyledButton = styled(Button)`
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.green};
	border: ${({ theme }) => `6px solid ${theme.green}`};

	padding: 0 35px;
	font-size: 14px;
    line-height: 45px;

	width: 222px;

	${({ dark, theme }) => dark && `
		background-color: ${theme.purple};
		border 6px solid ${theme.purple};
	`}
`;
