import { json } from '@sveltejs/kit';

import type { RequestEvent } from './$types';

export async function POST(event: RequestEvent): Promise<Response> {
	console.log(Date.now(), '/login/+server start');

	event.cookies.set('token', '' + Math.round(Math.random() * 99999999), {
		expires: new Date('2033-01-01'),
		path: '/',
		secure: true,
		httpOnly: true
	});

	return json({});
}
