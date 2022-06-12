import { forward } from 'effector';
import axios from 'axios';

import { fetchTasks, fetchTasksFx, $tasksData } from '.';

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

fetchTasksFx.use(async () => axios.get('http://localhost:8001/tasks?filter=false'));

forward({
	from: fetchTasks,
	to: fetchTasksFx
});

$tasksData.on(fetchTasksFx.doneData, (_, rawData) => {
	// sleep(5000);
	const { data } = rawData;
	return data;
});


