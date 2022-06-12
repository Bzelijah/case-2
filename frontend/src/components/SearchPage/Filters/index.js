import React, { useEffect } from 'react';
import { Filter } from './Filter';

import {SearchBlock} from './SearchBlock';

import {getFilterId} from '../../../entities/filter/getters';

import {filters} from '../../../constants/filters';

import * as S from './styles';


export const Filters = () => {
	
	return (
		<S.Filters >
			<SearchBlock />
			{filters.map(filter => (
				<Filter key={getFilterId(filter)} filter={filter} />
			))}
		</S.Filters>
	);
};
