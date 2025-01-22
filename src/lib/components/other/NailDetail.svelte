<script>
	import { menus } from '$lib/data/menu';
	import { link } from '$lib/link-generator';
	import MenuTable from '../MenuTable.svelte';
	import StickyNote from '../StickyNote.svelte';

	const nailMenu = menus.find((menu) => menu.category === 'ネイル');
</script>

<section>
	<h2>Vell moネイル</h2>
	<div class="container">
		<div class="left-side">
			<StickyNote title="オススメのポイント" headingLevel={3} style="width:fit-content">
				<ul>
					<li>初回オフ無料！</li>
					<li>自店での付け替えオフ無料！</li>
					<li>完全個室！</li>
				</ul>
			</StickyNote>
			<div class="images">
				<img src={link('images/nails/room')} alt="Vell moのネイル室" />
				<img src={link('images/nails/display')} alt="Vell moのネイルの種類" />
				<img src={link('images/nails/list')} alt="" />
			</div>
		</div>
		<div class="right-side">
			{#if nailMenu}
				<MenuTable title="Menu" plans={nailMenu.plans} repletion />
			{:else}
				<p>ネイルのデータが見つかりませんでした。</p>
			{/if}
		</div>
	</div>
</section>

<style>
	h2 {
		font-size: 1.5rem;
	}

	ul {
		list-style: inside '🍀';
		font-size: 1.1rem;
		line-height: 2;
	}

	img:not(:last-child) {
		margin-block-end: 1rem;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem 1rem;
	}

	.right-side {
		justify-self: center;
	}

	.images {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (width < 965px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
