import styled from 'styled-components';
import { Button } from '../../components/common/Button/styles';

export const CreateTaskPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70vw;
  margin-left: 10vw;
`;

export const Title = styled.div`
	font-size: 32px;
	line-height: 40px;
	font-family: 'Rubik Medium';

	margin: 36px 0 24px;
`;

export const Step = styled.div`
  margin-bottom: 40px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.step {
		font-size: 16px;
		font-family: 'Rubik Medium';
		color: ${({ theme }) => theme.gray};

		margin-bottom: 10px;
	}

	.step-title {
		font-size: 16px;
		font-family: 'Rubik Medium';

		margin-bottom: 20px;
	}

	.summary {
		font-size: 14px;
		font-family: 'Rubik';
		color: ${({ theme }) => theme.black};

		margin-bottom: 8px;
	}
`;

export const Label = styled.div`
	font-size: 16px;
	line-height: 40px;
	font-family: 'Rubik Medium';
	text-transform: uppercase;

	color: ${({ theme }) => theme.green};
`;

export const Input = styled.input`
	height: 44px;
	width: ${({ date }) => date ? '120px' : '450px'};
	padding: 12px;

	background: ${({ theme }) => theme.white};
	border:${({ theme }) => `1px solid ${theme.grey}`};
	border-radius: 8px;

	font-size: 14px;

	margin: ${({ noLabel }) => noLabel ? '10px 0' : '0 0 20px'};
`;

export const Textarea = styled.textarea`
	width: 710px;
	height: 175px;

	padding: 12px;

	font-size: 14px;
	font-family: 'Rubik';

	background: ${({ theme }) => theme.white};
	border:${({ theme }) => `1px solid ${theme.grey}`};
	border-radius: 8px;
	outline: none;
	transition: 0.3s ease border-bottom;
  resize: none;

	margin: ${({ noLabel }) => noLabel ? '10px 0' : '0 0 20px'};
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

	margin-bottom: 10px;

	input {
		margin-right: 12px;
	}

	label {
		font-size: 14px;
		font-family: 'Rubik';
		
		margin-top: 3px;
	}
`;

export const DownloadButton = styled(Button)`
	display: flex;
	background-color: ${({ theme }) => theme.purple};
	color: ${({ theme }) => theme.white};

	font-size: 20px;
	border-radius: 4px;

	img {
		margin-right: 8px;
	}
`;

export const Summary = styled.div`
	max-width: 520px;
	font-size: 16px;
	line-height: 24px;
	font-family: 'Rubik';

	margin-top: 10px;

	color: ${({ theme }) => theme.grey};
`;

export const ConfirmButton = styled(Button)`
	background-color: ${({ theme }) => theme.green};
	color: ${({ theme }) => theme.white};

	font-size: 25px;
	border-radius: 4px;

	padding: 30px;
	margin-bottom: 40px;

	img {
		margin-right: 8px;
	}
`;
