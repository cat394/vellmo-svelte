<script>
	import { shop } from '$lib/data/shop';
	import { link } from '$lib/link-generator';
	import LinkCard from '../LinkCard.svelte';

	const headingLevel = 2;
</script>

<section>
	<LinkCard
		style="--hue:21;"
		{headingLevel}
		title="お店について"
		description="外観や店内の雰囲気、住所などの詳しい情報はこちらです。"
		href={link('about')}
	/>
	<LinkCard
		style="--hue:260;"
		{headingLevel}
		title="メニュー"
		description="カット、カラー、パーマから、ネイルや着付けといった特別なメニューまでご用意しております。"
		href={link('price')}
	/>
	<LinkCard
		style="--hue:159;"
		{headingLevel}
		title="製品一覧"
		description={`${shop.name}では市販では売られていないような、様々な美容アイテムも取り扱っております。`}
		href={link('products')}
	/>
	<LinkCard
		style="--hue:67.8;"
		{headingLevel}
		title="その他サービス"
		description="当店では、基本的な美容サービスの他にもネイルも行っています。"
		href={link('others')}
	/>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(262px, 100%), 1fr));
		gap: 20px;
	}
</style>
