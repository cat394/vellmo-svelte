<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLAnchorElement> {
		headingLevel: 1 | 2 | 3;
		title: string;
		description: string;
	}

	let { headingLevel, title, description, ...rest }: Props = $props();
</script>

<a class="card" {...rest}>
	<svelte:element this={`h${headingLevel}`} class="title">{title}</svelte:element>
	<p>{description}</p>
	<p><small>詳しくみる</small></p>
</a>

<style>
	.card {
		--_hue: var(--hue, 21);
		--_bg: oklch(0.54 0.14 var(--_hue));
		--_shadow-offset: 13px;
		--_shadow-color: oklch(from var(--_bg) 0.2 c h);

		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 5px;
		position: relative;
		box-shadow: var(--_shadow-offset) var(--_shadow-offset) 0px 0px var(--_shadow-color);
		transition: all 300ms;

		&:hover {
			translate: var(--_shadow-offset) var(--_shadow-offset);
			box-shadow: 0px 0px 0px 0px var(--_shadow-color);
		}
	}

	a {
		text-decoration: none;
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.1rem;
		background: var(--_bg);
	}

	.title,
	p {
		color: white;
	}

	.title {
		font-size: 2rem;
	}

	p:first-of-type {
		flex-grow: 1;
	}

	p:last-of-type {
		text-align: right;
	}

	small {
		text-decoration: underline;
	}
</style>
