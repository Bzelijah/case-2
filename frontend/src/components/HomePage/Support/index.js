import React from 'react';

import volonters from '../../../assets/volonters.svg';

import * as S from './styles';

export const Support = () => {
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
				<S.StyledButton>Стать волонтером</S.StyledButton>
				<S.StyledButton dark={true}>Стать партнером</S.StyledButton>
			</div>
		</S.Support>
	);
};
