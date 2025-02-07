import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load() {
	try {
		const pathToReservation = '../../lib/articles/reservation.md';

		 /* @vite-ignore */
		const reservation = await import(pathToReservation);

		return {
			reservation: {
				content: reservation.default
			}
		};
	} catch {
		error(404, 'ご予約方法のドキュメントを取得できませんでした。');
	}
}
