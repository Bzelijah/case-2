import styled from 'styled-components';

export const Partners = styled.div`
	padding: 30px 200px 100px;

	.title {
		font-size: 16px;
		line-height: 40px;
		color: ${({ theme }) => theme.red}; 
		text-transform: uppercase;
		font-family: 'Rubik Medium';

		margin-bottom: 20px;
	}

	.logo-container {
		display: flex;
		justify-content: space-between;
	}
`;
