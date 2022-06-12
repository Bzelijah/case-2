import { forward } from 'effector';
import axios from 'axios';

import {fetchTasks, fetchTasksFx, $tasksData, filterTasks, filterTasksFx} from '.';

function sleep(ms) {
	return new Promise((resolve, reject) => {
		const startTime = new Date().getTime() + ms;
		let currentTime = new Date().getTime();
		while (startTime > currentTime) {
			currentTime = new Date().getTime();
		}
		resolve(true);
	});
}

fetchTasksFx.use(async () => axios.get('http://localhost:8001/api/tasks?filter=false'));

filterTasksFx.use(async ({id, value: _value, }) => {
	const value = _value.replace('+', '%2B');
	return axios.get(`http://localhost:8001/api/tasks?filter=true&${id}=${value}`);
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
	// sleep(5000);
	const { data } = rawData;
	return data;
});

$tasksData.on(filterTasksFx.doneData, (_, rawData) => {
	// sleep(5000);
	const { data } = rawData;
	return data;
});


