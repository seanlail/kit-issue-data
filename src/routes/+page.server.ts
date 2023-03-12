import type { PageServerLoadEvent } from './$types';

export async function load(event: PageServerLoadEvent) {
	console.log(Date.now(), '/+page.server', !!event.locals.user);
	return {
		random: Math.round(Math.random() * 9999)
	};
}
