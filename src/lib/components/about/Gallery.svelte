<script lang="ts">
	import { link } from '$lib/link-generator';
	import type { HTMLImgAttributes } from 'svelte/elements';

	const photos: HTMLImgAttributes[] = [
		{
			src: link('images/interior/sofa'),
			alt: 'Vell moに置いてある赤と灰色を基調としたカラフルなソファ',
			width: 375,
			height: 500
		},
		{
			src: link('images/interior/chair'),
			alt: 'Vell moの店内は青い壁をしており、2組のスタイリングチェアが置いてある',
			width: 667,
			height: 500
		},
		{
			src: link('images/interior/shelf'),
			alt: 'Vell moの店内にハーブ系の美容アイテムが棚に並んでいる',
			width: 667,
			height: 500
		},
		{
			src: link('images/exterior/wall'),
			alt: 'Vell moに置いてある赤と灰色を基調としたカラフルなソファ',
			width: 600,
			height: 450
		},
		{
			src: link('images/exterior/parking'),
			alt: 'Vell moの店内は青い壁をしており、2組のスタイリングチェアが置いてある',
			width: 661,
			height: 500
		}
	];
</script>

<section>
	<h2>Photos</h2>
	<div class="gallery">
		{#each photos as photo}
			<img {...photo} />
		{/each}
	</div>
</section>

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
	}
</style>
