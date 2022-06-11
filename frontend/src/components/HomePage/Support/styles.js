import styled from 'styled-components';

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
