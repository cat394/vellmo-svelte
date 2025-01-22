<script lang="ts">
	import '$lib/styles/app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
	<link rel="shortcut icon" href="favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<link rel="manifest" href="favicon/site.webmanifest">
	<meta name="msapplication-config" content="favicon/browserconfig.xml" />
	<meta property="og:image" content="favicon/favicon.ico" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="layout">
	<Header />
	<main>{@render children()}</main>
	<Footer />
</div>

<style>
	.layout {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
