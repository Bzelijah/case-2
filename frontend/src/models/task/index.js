import { createEvent, createEffect, createStore, combine } from 'effector';

// fetchTasks() просто экшен
export const fetchTasks = createEvent();

export const fetchTasksFx = createEffect();

export const $tasksData = createStore(null);

// чтобы в компоненте юзать напрмире import {useStore} from 'effector-react' const {data, loading: boolean} = useStore($tasks)
export const $tasks = combine({
    data: $tasksData,
    loading: fetchTasksFx.pending
});