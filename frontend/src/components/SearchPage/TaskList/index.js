import React, { useEffect } from 'react';
import { useStore } from 'effector-react';

import { getTaskId } from '../../../entities/task/getters';

import {$tasks, fetchTasks} from '../../../models/task';

import {TaskCard} from './TaskCard';
import {Loader} from '../../common/Loader';

import * as S from './styles';


export const TaskList = () => {
	useEffect(() => fetchTasks(), []);

	const {data: tasksData, loading} = useStore($tasks);

	if (!tasksData || loading) {
		return (
			<Loader />
		);
	}

	return (
		<S.TaskList>
			{tasksData && tasksData.map(taskData => (
				<TaskCard key={getTaskId(taskData)} data={taskData} />
			))}
		</S.TaskList>
	);
};
