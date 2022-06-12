import styled from 'styled-components';
import { Button } from '../../common/Button/styles';

export const Events = styled.div`
	padding: 64px 0 120px;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${({ theme }) => theme.lightPink};

	.title {
		font-size: 32px;
		line-height: 40px;
		font-family: 'Rubik Medium';

		text-transform: uppercase;

		margin-bottom: 48px;
	}
`;

export const CardsContainer = styled.div`
	display: flex;
	width: 1440px;

	overflow-x: scroll;

	padding-bottom: 20px;

	& > div:not(:last-child) {
		margin-right: 20px;
	}
`;

export const Card = styled.div`
	width: 345px;
	height: 560px;

	flex-shrink: 0;

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
	background-color: ${({ theme }) => theme.white};

	.content {
		padding: 34px 34px 20px 34px;
		height: 330px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.title {
			font-size: 24px;
			line-height: 32px;

			margin-bottom: 16px;

			font-family: 'Rubik Medium';
		}

		.summary {
			font-size: 14px;
			line-height: 22px;

			font-family: 'Rubik';
		}

		.location {
			display: flex;
			align-items: center;

			color: ${({ theme }) => theme.black};

			font-size: 14px;
			line-height: 22px;

			font-family: 'Rubik Medium';

			img {
				margin-right: 14px;
			}
		}

		.low-container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			margin-top: 36px;
			color: ${({ theme }) => theme.black};

			font-size: 12px;
			line-height: 22px;

			font-family: 'Rubik Medium';
		}
	}
`;

export const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.green};
	color: ${({ theme }) => theme.white};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);

	font-size: 14px;
`;

export const BigButton = styled(Button)`
	background-color: ${({ theme }) => theme.green};
	color: ${({ theme }) => theme.white};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);

	margin-top: 40px;
	padding: 30px;
`;
