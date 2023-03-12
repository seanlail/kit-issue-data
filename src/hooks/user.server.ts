import type { Handle } from '@sveltejs/kit';

export const userHook = (async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	event.locals = {
		...event.locals,
		user: token ? { id: token } : undefined
	};

	console.log(Date.now(), 'user.server hook', !!event.locals.user);

	return resolve(event);
}) satisfies Handle;
