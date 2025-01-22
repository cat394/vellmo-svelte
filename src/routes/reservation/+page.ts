import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const pathToReservation = '../../lib/articles/reservation.md';

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
