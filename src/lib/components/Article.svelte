<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		name: string;
		content: Component;
	}

	let props: Props = $props();
</script>

<article data-article-name={props.name}>
	<props.content />
</article>

<style>
	article {
		overflow: hidden;
	}
</style>
