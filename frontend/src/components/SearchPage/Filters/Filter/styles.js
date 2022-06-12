import styled from 'styled-components';

export const Root = styled.div`
  width: 300px;
  
  .filterNameContainer {
    height: 50px;
    
    display: flex;
    justify-content: space-between;

    padding: 16px 20px;
    border-radius: 6px;
    
    font-family: 'Rubik Medium';
    font-size: 16px;
    text-transform: uppercase;

    background-color: ${({ theme }) => theme.lightPurple};
    
    .filterName {
      display: flex;
      align-items: flex-start;

      img {
        margin-right: 14px;
      }
    }

    .control {
      width: 14px;
      height: 8px;
    }
  }

  .checkboxContainer {
    display: flex;
    margin: 16px;
    
    .checkbox {
      margin-right: 8px;
      border-radius: 50px;
      
      // :checked {
      //   color: ${({ theme }) => theme.purple};
      // }
    }
    
    label {
      font-family: 'Rubik';
      font-size: 15px;

      color: ${({ theme }) => theme.darkGrey};
    }
  }
`;