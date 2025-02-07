<script lang="ts">
	import "scroll-hint/css/scroll-hint.css";
	import ScrollHint from 'scroll-hint';
	import { onMount } from 'svelte';
	import type { Menu } from '$lib/data/menu';

	interface Props {
		title: string;
		plans: Menu['plans'];
		repletion?: true;
	}

	let { title, plans, repletion }: Props = $props();

	onMount(() => {
		new ScrollHint('.scroll-container', {
			scrollHintIconAppendClass: 'scroll-hint-icon-white',
			i18n: {
				scrollable: 'スクロールできます'
			}
		});
	});
</script>

<div class="container">
	<h3>{title}</h3>
	<div class="scroll-container">
		<table>
			<tbody>
				{#each plans as plan}
					<tr>
						<th scope="col">{plan.name}</th>
						<td>{plan.price}円</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	{#if repletion}
		<p><small>料金は税込み価格です。</small></p>
	{/if}
</div>

<style>
	.container {
		--_table-text: #88666f;

		display: grid;
		grid-template-rows: 1fr auto;
		padding: 1.25rem;
		background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
			url('images/style/menu-bg.webp');
		color: var(--_table-text);
		border-radius: 5px;
	}

	h3 {
		text-align: center;
		font-weight: bold;
		font-size: 1.5rem;
		margin-block-end: 1rem;
	}

	table {
		border-radius: 5px;
		border-collapse: collapse;
		width: 100%;
	}

	tr {
		overflow: auto;
		min-width: 150px;
	}

	th,
	td {
		white-space: nowrap;
		--_border-style: 3px dotted;
		border-bottom: var(--_border-style) #cda4a4;
		padding: 1rem 2rem;
		font-size: 1.2rem;
		text-align: left;
	}

	tr:last-child {
		th,
		td {
			border: none;
		}
	}

	tr:not(:last-child):nth-child(odd) {
		th,
		td {
			border-bottom: var(--_border-style) red;
		}
	}

	p {
		color: var(--_table-text);
		text-align: right;
	}
</style>
