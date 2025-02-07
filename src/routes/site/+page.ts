import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load() {
	try {
		/* @ts-ignore */ 
		const [credit, policy] = await Promise.all([import('../../lib/articles/credit.md'), import('../../lib/articles/policy.md')]);

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
