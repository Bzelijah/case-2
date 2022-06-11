import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 268px;
  width: 100%;

	padding: 72px 48px 36px;
	background-color: ${({ theme }) => theme.lightPink};
`;
