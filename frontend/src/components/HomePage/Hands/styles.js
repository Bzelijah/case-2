import styled from 'styled-components';

import { Button } from '../../../components/common/Button/styles';

export const Hands = styled.div`
	max-width: 1440px;
  	height: 780px;
	
	background-image: ${({ hoverImage }) => `url(${hoverImage})`};

	margin-right: auto;
	margin-left: auto;

  	background-position: center center;
  	background-size: cover;

	padding: 100px 0 76px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.title {
		font-size: 48px;
		line-height: 62px;
		font-family: 'Rubik Medium';
		text-align: center;
		color: ${({ theme }) => theme.white};
	}

	.buttons-container {
		display: flex;
		justify-content: center;

		button:first-child {
			margin-right: 24px;
		}
	}
`;

export const StyledButton = styled(Button)`
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.green};
	border: ${({ theme }) => `6px solid ${theme.green}`};

	padding: 30px 35px;
	font-size: 25px;
	line-height: 45px;

	width: 320px;

	${({ dark, theme }) => dark && `
		background-color: ${theme.purple};
		border 6px solid ${theme.purple};
	`}
`;




