import { writable, type Writable } from 'svelte/store';

export const editors: Writable<{ id: number; title: string; count: number; content: string }[]> =
	writable();
export const idIncrement: Writable<number> = writable(0);
