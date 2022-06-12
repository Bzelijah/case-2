import React, { useEffect } from 'react';
import { useStore } from 'effector-react';

import {SearchBlock} from './SearchBlock';

import * as S from './styles';


export const Filters = () => {

	return (
		<S.Filters >
			<SearchBlock />
			<div>Filters!!!</div>
		</S.Filters>
	);
};
