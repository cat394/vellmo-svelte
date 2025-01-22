<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import Icon from './Icon.svelte';

	interface Props {
		name: string;
		description: string;
		image: HTMLImgAttributes;
		tags: string[];
	}

	let { name, description, image, tags }: Props = $props();
</script>

<div class="container">
	<div class="card">
		<div class="left">
			<h3>{name}</h3>
			<img {...image} />
		</div>
		<div class="right">
			<p>{@html description}</p>
			<ul>
				{#each tags as tag}
					<li class="rounded">
						<Icon name="tag" color="white" width={30} height={30} /><span>{tag}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.container {
		container: card / inline-size;
	}

	.card {
		display: grid;
		grid-template-columns: 0.7fr 1fr;
		gap: 2rem 2.5rem;
		border-radius: 5px;
		padding: 2rem;
		background: #fff8ef;
	}

	.right {
		display: grid;
		height: 100%;
		grid-template-rows: 1fr auto;

		> p {
			align-self: center;
		}
	}

	@container card (max-width: 967px) {
		.card {
			grid-template-columns: 1fr;
		}
	}

	h3 {
		width: 70%;
		margin-block-end: 1.5rem;
		font-size: 1.3rem;
		line-height: 2;
		border-block-end: 2px dotted var(--accent);

		@media (width < 382px) {
			width: 100%;
		}
	}

	p {
		margin-block: 2rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	li {
		display: flex;
		align-items: center;
		gap: 0.2em;
		padding: 0.5em 1em;
		background: var(--theme);
		color: white;
		font-weight: bold;
	}
</style>
