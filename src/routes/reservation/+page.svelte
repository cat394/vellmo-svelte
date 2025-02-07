<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ShopCalender from '$lib/components/reservation/ShopCalender.svelte';
	import Article from '$lib/components/Article.svelte';
	import Head from '$lib/components/Head.svelte';
	import { link } from '$lib/link-generator';
	import { shop } from '$lib/data/shop';

	let { data } = $props();
</script>

<Head
	name="reservation"
	path={link('reservation')}
	description={`${shop.name}の予約方法をご案内します。メール、電話またはラインでのお問い合わせに対応しております。`}
	keywords={['予約案内', 'メール予約', '電話予約', '簡単予約']}
></Head>

<PageTitle title="Reservation" />

<ShopCalender />
<hr class="border"/>
<Article name="reservation" content={data.reservation.content} />

