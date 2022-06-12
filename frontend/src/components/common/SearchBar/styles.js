import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 24px 120px 42px;

	display: flex;
	justify-content: space-between;
`;

export const SearchInput = styled.div`
	width: 758px;
	padding: 15px 20px;

	border:${({ theme }) => `6px solid ${theme.grey}`};
	border-radius: 10px;

	display: flex;
	justify-content: space-between;

	input {
		width: 90%;
		font-size: 24px;
		font-family: 'Rubik';
		border: none;

		&:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
	}

	img {
		cursor: pointer;
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

	img {
		cursor: pointer;
		width: 50px;
	}

	img:first-child {
		margin-right: 12px;
	}
`;
