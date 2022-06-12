import React, { useEffect } from 'react';
import { Filter } from './Filter';

import { getFilterId } from '../../../entities/filter/getters';

import { filters } from '../../../entities/filter';

import * as S from './styles';


export const Filters = () => (
	<S.Root >
		{filters.map(filter => (
			<Filter key={getFilterId(filter)} filter={filter} />
		))}
	</S.Root>
);
