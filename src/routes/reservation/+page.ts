import { error } from '@sveltejs/kit';

export async function load() {
	try {
		 /* @ts-ignore */
		const reservation = await import('../../lib/articles/reservation.md');

		return {
			reservation: {
				content: reservation.default
			}
		};
	} catch {
		error(404, 'ご予約方法のドキュメントを取得できませんでした。');
	}
}
