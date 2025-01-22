<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		title: string;
		headingLevel: 1 | 2 | 3;
		children: Snippet;
	}

	let { title, headingLevel, children, ...rest }: Props = $props();
</script>

<div class="sticky-note" {...rest}>
	<div class="title">
		<svelte:element this={`h${headingLevel}`}>
			{title}
		</svelte:element>
	</div>
	<div class="content">
		{@render children()}
	</div>
	<div class="dot rounded" style="left: 10px;"></div>
	<div class="dot rounded" style="right: 10px"></div>
</div>

<style>
	.sticky-note {
		--_dot-size: var(--dot-size, 0.7rem);

		position: relative;
		background: #fff8ef;
		padding: 1.2rem;
		box-shadow: 9px 12px 5px 0px rgb(196 196 196 / 20%);
		border-radius: 5px;
		margin-block-end: 1.5rem;
		z-index: -1;
	}

	.title {
		margin-block-start: calc(var(--_dot-size) + 0.5rem);
		text-align: center;

		> * {
			font-weight: bold;
		}
	}

	.content {
		margin-block-start: 1.2rem;
	}

	.dot {
		position: absolute;
		width: var(--_dot-size);
		height: var(--_dot-size);
		background: var(--theme);
		top: 10px;
	}
</style>
