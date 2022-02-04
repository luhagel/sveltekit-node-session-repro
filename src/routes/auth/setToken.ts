import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (req) => {
	const token = req.url.searchParams.get('token');
	return {
		status: 302,
		headers: {
			location: '/protected',
			'set-cookie': `token=${token ?? ''}; Path=/; HttpOnly`
		}
	};
};
