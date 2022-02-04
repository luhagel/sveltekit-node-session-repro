import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		status: 302,
		headers: {
			location: '/auth/login',
			'set-cookie': `token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
		}
	};
};
