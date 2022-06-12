import React from 'react';

import * as S from './styles';

import partners1 from '../../../assets/partners_logo_1.svg';
import partners2 from '../../../assets/partners_logo_2.svg';
import partners3 from '../../../assets/partners_logo_3.svg';
import partners4 from '../../../assets/partners_logo_4.svg';

export const Partners = () => {
	return (
		<S.Partners>
			<div className='title'>
				партнеры
			</div>
			<div className='logo-container'>
				<img src={partners1} alt='' />
				<img src={partners2} alt='' />
				<img src={partners3} alt='' />
				<img src={partners4} alt='' />
			</div>
		</S.Partners>
	);
};
