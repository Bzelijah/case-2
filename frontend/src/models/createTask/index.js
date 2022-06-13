import { createEvent, createEffect, createStore } from 'effector';

export const createTask = createEvent();
export const resetDoneStore = createEvent();

export const createTaskFx = createEffect();

export const $doneCreateTask = createStore(null);
