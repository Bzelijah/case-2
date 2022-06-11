import React from 'react';

import peoples from '../../../assets/peoples.svg';
import profile from '../../../assets/profile.svg';
import lighting from '../../../assets/lighting.svg';

import * as S from './styles';

export const Facts = () => {
	return (
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
	);
};
