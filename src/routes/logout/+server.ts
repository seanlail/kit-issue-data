import { json } from '@sveltejs/kit';

import type { RequestEvent } from './$types';

export async function POST(event: RequestEvent): Promise<Response> {
	console.log(Date.now(), '/logout/+server start');

	event.cookies.delete('token', {
		path: '/',
		secure: true,
		httpOnly: true
	});

	return json({});
}
