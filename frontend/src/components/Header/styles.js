import styled from 'styled-components';

import { Button } from '../common/Button/styles';

export const Wrapper = styled.div`
	width: 100%;
	padding: 72px 48px 36px;
	background-color: ${({ theme }) => theme.lightPink};

	position: sticky;
	top: 0;

	display: flex;
	justify-content: space-between;

	.buttons-container {
		display: flex;

		& > button {
			margin-right: 20px;
		}
	}

	.right-container {
		display: flex;
		align-items: flex-start;

		& > button {
			margin-right: 30px;
		}

		& > img {
			margin-left: 20px;
			width: 50px;
		}
	}
`;

export const MenuButton = styled(Button)`
	text-transform: uppercase;
	font-size: 20px;
`;

export const StyledButton = styled(Button)`
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.aqua};

	padding: 15px 25px;
`;
