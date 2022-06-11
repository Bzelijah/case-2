import styled from 'styled-components';

import { Button } from '../../components/common/Button/styles';

export const Hands = styled.div`
	max-width: 1440px;
  	height: 780px;

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

export const Facts = styled.div`
	padding: 50px 0;
	background-color: ${({ theme }) => theme.lightPink};
	color: ${({ theme }) => theme.black};

	display: flex;
	flex-direction: column;
	align-items: center;

	.row {
		width: 1200px;

		display: flex;
		justify-content: space-around;

		padding: 60px 0;

		background-color: ${({ theme }) => theme.white};
		border-radius: 10px;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;

			font-size: 14px;
			line-height: 18px;
			font-family: 'Rubik';

			.title {
				margin: 30px 0 6px;

				font-size: 28px;
				line-height: 36px;
				font-family: 'Rubik Medium';
				color: ${({ theme }) => theme.green}
			}
		}
	}
`;

export const Support = styled.div`
	padding: 90px 120px 60px;

	.container {
		display: flex;
		justify-content: space-between;

		.title {
			font-size: 32px;
			line-height: 40px;
			text-transform: uppercase;
			font-family: 'Rubik Medium';

			margin: 50px 0 24px;
		}

		.summary {
			font-size: 22px;
			line-height: 26px;
			font-family: 'Rubik';

			max-width: 580px;
		}
	}
`;
