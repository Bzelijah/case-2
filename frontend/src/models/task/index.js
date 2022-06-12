import { createEvent, createEffect, createStore, combine } from 'effector';

//  Получение всех задач
export const fetchTasks = createEvent();
export const fetchTasksFx = createEffect();

// Фильтрация задача
export const filterTasks = createEvent();
export const filterTasksFx = createEffect();

export const $tasksData = createStore(null);

export const $tasks = combine({
	data: $tasksData,
	loading: fetchTasksFx.pending,
	filterLoading: filterTasksFx.pending
});