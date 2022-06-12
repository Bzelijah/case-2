import { forward } from 'effector';
import axios from 'axios';

import {fetchTasks, fetchTasksFx, $tasksData, filterTasks, filterTasksFx} from '.';

fetchTasksFx.use(async () => axios.get('http://localhost:8001/api/tasks?filter=false'));

filterTasksFx.use(async ({filterId, selectedValue}) => {
	const value = filterId === 'age' ? selectedValue.replace('+', '%2B') : selectedValue;
	return axios.get(`http://localhost:8001/api/tasks?filter=true&${filterId}=${value}`);
});

forward({
	from: fetchTasks,
	to: fetchTasksFx
});

forward({
	from: filterTasks,
	to: filterTasksFx
});

$tasksData.on(fetchTasksFx.doneData, (_, rawData) => {
	const { data } = rawData;
	return data;
});

$tasksData.on(filterTasksFx.doneData, (_, rawData) => {
	const { data } = rawData;
	return data;
});


