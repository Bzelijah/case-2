import { forward } from 'effector';
import axios from 'axios';

import { createTask, createTaskFx } from '.';

createTaskFx.use(async (form) =>
	await axios.post('http://localhost:8001/api/create', form),
);

forward({
	from: createTask,
	to: createTaskFx
});
