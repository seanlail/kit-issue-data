import type { LayoutServerLoadEvent } from './$types';

export async function load(event: LayoutServerLoadEvent) {
	console.log(Date.now(), '+layout.server', !!event.locals.user);
	return { user: event.locals.user };
}
