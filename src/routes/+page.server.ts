import type { PageServerLoadEvent } from './$types';

export async function load(event: PageServerLoadEvent) {
	console.log(Date.now(), '/+page.server before parent', !!event.locals.user);

	const parentData = await event.parent();

	console.log(Date.now(), '/+page.server after parent', !!event.locals.user);

	return {
		...parentData,
		random: Math.round(Math.random() * 9999)
	};
}
