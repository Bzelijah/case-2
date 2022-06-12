import React, { useMemo, useState } from 'react';
import { useStore } from 'effector-react';

import {Loader} from '../../../common/Loader';

import {getFilterId, getFilterValues} from '../../../../entities/filter/getters';

import {$tasks, filterTasks} from '../../../../models/task';

import arrowDown from '../../../../assets/arrowDown.svg';

import * as S from './styles';

export const Filter = ({filter: _filter}) => {
	const {filterLoading} = useStore($tasks);
	const [filter, setFilter] = useState(_filter);

	const filterId = useMemo(() => getFilterId(filter), [filter]);
	const filterValues = useMemo(() => getFilterValues(filter), [filter]);

	const onChange = valueId => {
		setFilter(prevState => {
			const nextValues = prevState.values.map(value => {
				if (value.id === valueId) {
					return {
						...value,
						checked: !value.checked,
					};
				}
				return value;
			});
			return {
				...prevState,
				values: nextValues,
			};
		});
	};

	if (filterLoading) {
		return (
			<Loader />
		);
	}
	return (
		<S.Root>
			<div className="filterNameContainer">
				<div className="filterName">
					<img src={filter.icon} alt='filterIcon' />
					<div>{filter.name}</div>
				</div>
				<div className="control">
					<img src={arrowDown} alt='arrowDown' />
				</div>
			</div>
			{filterValues.length && filterValues.map(filterValue => (
				<div className="checkboxContainer" key={filterValue.id}>
					<input
						onClick={() => filterTasks({filterId, selectedValue: filterValue.value})}
						onChange={() => onChange(filterValue.id)}
						type="checkbox"
						id={filterValue.id}
						name="scales"
						checked={filterValue.checked}
						disabled={filterValue.disable}
						className="checkbox"
					/>
					<label htmlFor={filterValue.id}>{filterValue.value}</label>
				</div>
			))}
		</S.Root>
	);
};