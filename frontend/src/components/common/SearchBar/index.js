import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import search from '../../../assets/search.svg';
import vk from '../../../assets/vk.svg';
import telegram from '../../../assets/telegram.svg';

export const SearchBar = () => {
	const goToSearchPage = useHistory();
	return (
		<S.Wrapper>
			<S.SearchInput>
				<input type='text' placeholder='Найдите мероприятие или проект' />
				<img onClick={() => goToSearchPage.push('/search')} src={search} alt='search-icon' />
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
