import React from 'react';

import hands from '../../../assets/hands.svg';

import * as S from './styles';

export const Hands = () => {
	return (
		<S.Hands hoverImage={hands}>
			<div className='title'>Вместе мы можем многое</div>
			<div className='buttons-container'>
				<S.StyledButton>Стать волонтером</S.StyledButton>
				<S.StyledButton dark={true}>Стать партнером</S.StyledButton>
			</div>
		</S.Hands>
	);
};

