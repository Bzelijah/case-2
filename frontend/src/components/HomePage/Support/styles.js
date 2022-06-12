import styled from 'styled-components';

import { Button } from '../../../components/common/Button/styles';

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

	.buttons-container {
		margin-top: 90px;

		display: flex;
		justify-content: flex-end;

		button:first-child {
			margin-right: 20px;
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
