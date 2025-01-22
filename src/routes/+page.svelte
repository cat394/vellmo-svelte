<script>
	import Features from '$lib/components/home/Features.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import View from '$lib/components/home/View.svelte';
	import Links from '$lib/components/home/Links.svelte';
	import Head from '$lib/components/Head.svelte';
	import { shop } from '$lib/data/shop';
	import { link } from '$lib/link-generator';
</script>

<Head
	name="home"
	path={link('home')}
	description={`${shop.name}は、取手市にある小さな美容室。緑のある落ち着いた空間と良質な美容サービスをお手ごろな価格で受けられることが魅力です。`}
></Head>

<Hero />
<hr />
<View />
<hr class="border" />
<Features />
<hr style="--space:10rem;" />
<Links />
