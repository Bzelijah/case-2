import React from 'react';

import * as S from './styles';

import search from '../../../assets/search.svg';
import vk from '../../../assets/vk.svg';
import telegram from '../../../assets/telegram.svg';

export const SearchBar = () => {
	return (
		<S.Wrapper>
			<S.SearchInput>
				<input type='text' placeholder='Найдите мероприятие или проект' />
				<img src={search} alt='' />
			</S.SearchInput>
			<S.Phone>
				<div>Горячая линия по вопросам</div>
				<div className='number'>8 (499) 722-69-90</div>
			</S.Phone>
			<S.Social>
				<img src={vk} alt='' />
				<img src={telegram} alt='' />
			</S.Social>
		</S.Wrapper>
	);
};
