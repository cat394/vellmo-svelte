<script>
	import Head from '$lib/components/Head.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Products from '$lib/components/products/Products.svelte';
	import { shop } from '$lib/data/shop';
	import { link } from '$lib/link-generator';
</script>

<Head
	name="products"
	path={link('products')}
	description={`${shop.name}で取り扱っているヘアケア商品をご紹介します。シャンプーやリンス、ドライヤー、ハーブティーなど美容グッズを取り揃えております。`}
	keywords={['美容グッズ', 'ヘアケア', 'シャンプー', 'トリートメント', 'スタイリング']}
></Head>

<PageTitle title="当店でのお取り扱い製品" />

<Products />
