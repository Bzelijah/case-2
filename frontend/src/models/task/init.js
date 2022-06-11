import { forward } from 'effector';
import axios from 'axios';

import { fetchTasks, fetchTasksFx, $tasksData } from '.';

fetchTasksFx.use(async ({ url }) => {
    const { data } = await axios.get(`/api/section?r=${url}`);
    return data;
});

forward({
    from: fetchTasks,
    to: fetchTasksFx
});

$tasksData.on(fetchTasksFx.doneData, (_, data) => {
    // номрализация даты
    return data
});


