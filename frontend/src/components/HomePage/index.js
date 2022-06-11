import React from 'react';

import * as S from './styles';

import hands from '../../assets/hands.svg';
import peoples from '../../assets/peoples.svg';
import profile from '../../assets/profile.svg';
import lighting from '../../assets/lighting.svg';
import volonters from '../../assets/volonters.svg';

export const HomePage = () => {
	return (
		<>
			<S.Hands style={{ backgroundImage: `url(${hands})` }}>
				<div className='title'>Вместе мы можем многое</div>
				<div className='buttons-container'>
					<S.StyledButton>Стать волонтером</S.StyledButton>
					<S.StyledButton dark={true}>Стать партнером</S.StyledButton>
				</div>
			</S.Hands>
			<S.Facts>
				<div className='row'>
					<div className='item'>
						<img src={peoples} alt='' />
						<div className='title'>&gt; более 3 млн.</div>
						<div>Ежегодно становятся волонтерами</div>
					</div>
					<div className='item'>
						<img src={profile} alt='' />
						<div className='title'>&gt; 500</div>
						<div>Проведенных мероприятий в год</div>
					</div>
					<div className='item'>
						<img src={lighting} alt='' />
						<div className='title'>№1</div>
						<div>Сервис по поиску волонтеров в Москве</div>
					</div>
				</div>
			</S.Facts>
			<S.Support>
				<div className='container'>
					<div>
						<div className='title'>Твоя помощь понадобится каждому</div>
						<div className='summary'>Мосволнтер помогает искать добровольцев по направлениям деятельности и привлекать как можно больше желающих помочь , с помощью нашей площадки вы сможете найти себе программу или занятие по душе, а так же помочь многим нуждающимся в вашей помощи.</div>
					</div>
					<img src={volonters} alt='' />
				</div>
			</S.Support>
		</>
	);
};
