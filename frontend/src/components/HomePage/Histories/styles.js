import styled from 'styled-components';

export const Histories = styled.div`
	padding: 64px 120px 50px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		text-align: center;
		text-transform: uppercase;

		font-size: 32px;
		line-height: 40px;
		font-family: 'Rubik Medium';

		margin-bottom: 56px;
	}

	.dots {
		cursor: pointer;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	max-width: 1200px;

	& > div:not(:nth-child(even)) {
		margin-right: 20px;
		background-color: ${({ theme }) => theme.lightPink};
	}

	.card {
		width: 580px;
		margin-bottom: 40px;

		padding: 30px 30px 60px 30px;
		background-color: ${({ theme }) => theme.lightGreen};
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
		border-radius: 10px;

		display: flex;

		.content {
			margin-left: 16px;
			margin-top: 40px;

			font-size: 20px;
			line-height: 24px;
			font-family: 'Rubik';
			color: ${({ theme }) => theme.black};

			div:first-child {
				text-transform: uppercase;
				font-size: 16px;
				line-height: 40px;
				font-family: 'Rubik Medium';
			}
		}
	}


`;
