<script>
	import { link } from '$lib/link-generator';
	import Head from '$lib/components/Head.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PriceTable from '$lib/components/price/PriceTable.svelte';
	import { shop } from '$lib/data/shop';
</script>

<Head
	name="price"
	path={link('price')}
	description={`${shop.name}の料金表です。カット、カラー、パーマなど、各種メニューの料金をご覧いただけます。`}
></Head>

<PageTitle title="Menu" />

<PriceTable />
