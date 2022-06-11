import { forward } from 'effector';
import axios from 'axios';

import { createTask, createTaskFx } from '.';

createTaskFx.use(async (form) =>
	await axios.post('улица пушкина дом колотушкина', form),
);

forward({
	from: createTask,
	to: createTaskFx
});
