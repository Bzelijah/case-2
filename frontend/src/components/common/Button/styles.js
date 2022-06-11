import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-family: 'Rubik Medium';
  font-size: 25px;
  line-height: 45px;
  font-weight: 500;
  height: 44px;
	
  border: none;
	background-color: ${({ theme }) => theme.transparent};
  
  border-radius: 10px;
	
  cursor: pointer;
`;


