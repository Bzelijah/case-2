import styled from 'styled-components';
import { Button } from '../common/Button/styles';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 544px;
  width: 100%;

	padding: 72px 120px 24px;
	background-color: ${({ theme }) => theme.lightPink};

	.high-container {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;

		& > img {
			width: 220px;
		}
	}

	.medium-container {
		margin-top: 70px;

		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.low-container {
		display: flex;
		justify-content: center;
		align-items: flex-end;

		margin-top: 40px;

		font-size: 14px;
		line-height: 20px;
		font-family: 'Rubik';

		color: ${({ theme }) => theme.darkGrey};

		& > div:first-child {
			margin-right: 130px;
		}
	}
`;

export const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	font-size: 20px;

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

export const GoToTopButton = styled(Button)`
	background-color: ${({ theme }) => theme.red};
	margin-left: 100px;
	width: 60px;
	height: 60px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

export const EmailContainer = styled.div`
	width: 345px;

	margin-bottom: 10px;

	.description {
		font-size: 20px;
		line-height: 24px;
		font-family: 'Rubik';

		margin-bottom: 16px;
	}

	.input-container {
		display: flex;
		width: 345px;

		background-color: ${({ theme }) => theme.white};
		padding-left: 20px;
		border-radius: 10px;

		input {
			width: 265px;
			border: none;

			font-size: 20px;
			line-height: 24px;
			font-family: 'Rubik';
			color: ${({ theme }) => theme.grey};

			&:focus {
				outline: none;
				&::placeholder {
					color: transparent;
				}
    	}	
		}
	}
`;

export const EmailButton = styled(Button)`
	background-color: ${({ theme }) => theme.red};
	width: 60px;
	height: 60px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);

	img {
		transform: rotate(90deg);
	}
`;

export const Phone = styled.div`
	font-size: 16px;
	line-height: 20px;
	font-family: 'Rubik';

	.number {
		font-size: 25px;
		line-height: 40px;
		font-family: 'Rubik Medium';

		margin-top: 8px;
	}
`;

export const Social = styled.div`
	display: flex;

	margin-bottom: 10px;

	img {
		cursor: pointer;
		width: 30px;
	}

	img:first-child {
		margin-right: 14px;
	}
`;

export const MenuButton = styled(Button)`	
	font-size: 20px;
	line-height: 24px;
	font-family: 'Rubik';
`;
