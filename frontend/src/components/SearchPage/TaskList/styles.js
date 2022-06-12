import styled from 'styled-components';

export const TaskList = styled.div`
  width: 100%;
    
  padding: 30px 122px 30px 142px;

  display: flex;
  flex-direction: column;
  align-items: center;
    
  background-color: ${({ theme }) => theme.lightGreen};
`;


