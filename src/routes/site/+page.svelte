<script>
	import { link } from '$lib/link-generator';
	import Head from '$lib/components/Head.svelte';
	import Article from '$lib/components/Article.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { shop } from '$lib/data/shop';

	let { data } = $props();
</script>

<Head
	name="home"
	path={link('site')}
	description={`${shop.name}のウェブサイトで使用している素材のクレジットと、当店のプライバシーポリシーについてご案内します。`}
	keywords={['素材クレジット', 'プライバシーポリシー', '法的情報', 'データ保護']}
></Head>

<PageTitle title="当サイトについて" />
<Article name="credit" content={data.credit.content} />
<hr class="border" />
<Article name="policy" content={data.policy.content} />
