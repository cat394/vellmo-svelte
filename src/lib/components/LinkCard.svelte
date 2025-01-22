<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		headingLevel: 1 | 2 | 3;
		title: string;
		description: string;
		href: string;
	}

	let { headingLevel, title, description, href, ...rest }: Props = $props();
</script>

<div class="card" {...rest}>
	<svelte:element this={`h${headingLevel}`} class="title">{title}</svelte:element>
	<p>{description}</p>
	<a {href}>詳しくみる</a>
</div>

<style>
	.card {
		--_hue: var(--hue, 21);
		--_bg: oklch(0.54 0.14 var(--_hue));
		background: var(--_bg);
		padding: 1.1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 5px;
	}

	.title,
	p {
		color: white;
	}

	.title {
		font-size: 2rem;
	}

	p {
		flex-grow: 1;
	}

	a {
		border: 2px solid transparent;
		background: white;
		border-radius: 0.5rem;
		display: block;
		text-align: center;
		padding-block: 0.4rem;
		text-decoration: none;
	}

	a:hover {
		outline: 2px solid white;
		border-color: var(--theme);
	}
</style>
