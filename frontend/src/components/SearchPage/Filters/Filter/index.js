import React from 'react';
import { useStore } from 'effector-react';

import {Loader} from '../../../common/Loader';

import {$tasks, filterTasks} from '../../../../models/task';

export const Filter = ({filter}) => {
	const {filterLoading} = useStore($tasks);
	
	if (filterLoading) {
		return (
			<Loader />
		);
	}
	return (
		<>
			<div>{filter.name}</div>
			{filter.values.map((value, index) => (
				<button key={index} onClick={() => filterTasks({id: filter.id, value})} type='checkbox'>
					{value}
				</button>
			))}
		</>
	);
};