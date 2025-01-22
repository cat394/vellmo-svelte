<script lang="ts">
	import { menus } from '$lib/data/menu';
	import MenuTable from '$lib/components//MenuTable.svelte';
</script>

<p>以下のメニューの料金はすべて税込み価格です。</p>
<p class="mobile-only">
	料金表が見切れている場合、横にスクロールされることで、価格を見ることが出来ます。
</p>
<div class="menus">
	{#each menus as menu}
		<div><MenuTable title={menu.category} plans={menu.plans} /></div>
	{/each}
</div>

<style>
	p {
		margin-block-end: 2rem;
	}

	.menus {
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3rem;
	}

	.mobile-only {
		display: none;

		@media (width < 600px) {
			display: block;
		}
	}
</style>
