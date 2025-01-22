import { page } from '$app/state';

export enum PageNames {
	home = 'ホーム',
	about = '当店について',
	price = '当店のメニュー',
	products = '商品ページ',
	reservation = '予約ページ',
	others = 'その他サービス',
	contact = 'お問い合わせ',
	site = '当サイトについて'
}

class PageNameContext {
	currentPageName = $derived.by(() => {
		const currentPathName = page.url.pathname.slice(1) as keyof typeof PageNames;

		const pageName = PageNames[currentPathName];

		if (pageName) {
			return pageName;
		} else {
			return PageNames['home'];
		}
	});
}

export const pageNameContext = new PageNameContext();
