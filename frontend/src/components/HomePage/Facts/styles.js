import styled from 'styled-components';

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
