import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';

import {$tasks, fetchTasks} from '../../../models/task';
import {Loader} from '../../common/Loader';


export const TaskList = () => {
	useEffect(() => fetchTasks(), []);
	const {data, loading} = useStore($tasks);
	console.log(data, 'datatatatat');
	console.log(loading, 'loadingloading');
	if (loading) {
		return (
			<Loader />
		);
	}
	return (
		<div>TASKSKSK</div>
	);
};
