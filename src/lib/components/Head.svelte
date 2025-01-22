<script lang="ts">
	import { PageNames } from '$lib/context/pageName.svelte';
	import { shop, siteURL } from '$lib/data/shop';
	import type { Snippet } from 'svelte';

	interface Props {
		name: keyof typeof PageNames;
		description: string;
		path: string;
		keywords?: string[];
		children?: Snippet;
	}

	let { name, description, path, keywords = [], children }: Props = $props();

	const title = `${shop.name} | ${PageNames[name]}`;

	const commonKeywords = ['美容室', 'ヘアサロン', '取手市'];

	keywords = [...new Set([...commonKeywords, ...keywords])];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={siteURL + path} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${siteURL}/images/og-image.jpg`} />
	{@render children?.()}
</svelte:head>
