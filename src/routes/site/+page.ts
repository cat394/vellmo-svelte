import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const pathToCredit = '../../lib/articles/credit.md';
		const pathToPolicy = '../../lib/articles/policy.md';

		const [credit, policy] = await Promise.all([import(pathToCredit), import(pathToPolicy)]);

		return {
			credit: {
				content: credit.default
			},
			policy: {
				content: policy.default
			}
		};
	} catch {
		error(404, 'クレジットまたはポリシーの記事を読み込めませんでした。');
	}
}
