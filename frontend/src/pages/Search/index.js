import React from 'react';

import {TaskList} from '../../components/SearchPage/TaskList';
import {Filters} from '../../components/SearchPage/Filters';

import * as S from './styles';


export const Search = () => {
	return (
		<S.SearchPage>
			<Filters />
			<TaskList />
		</S.SearchPage>
	);
};
