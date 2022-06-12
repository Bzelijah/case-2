import React from 'react';
import { useHistory } from 'react-router-dom';

import volonters from '../../../assets/volonters.svg';

import * as S from './styles';

export const Support = () => {
	const goToCreateTaskPage = useHistory();
	const history = useHistory();
	return (
		<S.Support>
			<div className='container'>
				<div>
					<div className='title'>Твоя помощь понадобится каждому</div>
					<div className='summary'>Мосволнтер помогает искать добровольцев по направлениям деятельности и привлекать как можно больше желающих помочь , с помощью нашей площадки вы сможете найти себе программу или занятие по душе, а так же помочь многим нуждающимся в вашей помощи.</div>
				</div>
				<img src={volonters} alt='' />
			</div>
			<div className='buttons-container'>
				<S.StyledButton onClick={() => history.push('/search')}>Хочу помочь</S.StyledButton>
				<S.StyledButton dark={true} onClick={() => goToCreateTaskPage.push('/create')}>Нужна помощь</S.StyledButton>
			</div>
		</S.Support>
	);
};
