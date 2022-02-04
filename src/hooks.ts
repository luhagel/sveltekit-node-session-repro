import type { GetSession, Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get('cookie') ?? '');

	event.locals.token = cookies.token;

	const response = await resolve(event, { ssr: false });
	return response;
};

export const getSession: GetSession = async (request) => {
	console.log('Locals in Session: ', request.locals);
	if (request.locals.token) {
		const session = {
			token: request.locals.token
		};
		return session;
	}
	return {};
};
