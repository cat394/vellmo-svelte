<script>
	import Greeting from '$lib/components/about/Greeting.svelte';
	import ShopDetail from '$lib/components/about/ShopDetail.svelte';
	import Gallery from '$lib/components/about/Gallery.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Head from '$lib/components/Head.svelte';
	import { link } from '$lib/link-generator';
	import { shop } from '$lib/data/shop';
</script>

<Head
	name="about"
	path={link('about')}
	description={`${shop.name}は、お客様の居心地がいいよう建物や内装を工夫しています。`}
	keywords={['サロン情報', '店舗紹介', 'コンセプト', '髪のケア', 'リラックス空間']}
></Head>

<PageTitle title="About" />
<Greeting />
<hr />
<Gallery />
<hr />
<ShopDetail />
