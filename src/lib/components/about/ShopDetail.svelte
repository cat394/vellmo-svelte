<script lang="ts">
	import { shop } from '$lib/data/shop';

	interface ShopInfo {
		header: string;
		data: string;
	}

	const infos: ShopInfo[] = [
		{
			header: '店名',
			data: shop.name
		},
		{
			header: '住所',
			data: shop.address
		},
		{
			header: '電話番号',
			data: `<a href=tel:${shop.tel}>${shop.tel}</a>`
		},
		{
			header: '営業時間',
			data: shop.opening
		},
		{
			header: '定休日',
			data: shop.closed
		}
	];
</script>

<section>
	<h2>店舗情報</h2>
	<div class="container">
		<iframe
			title="Vell moへの案内地図"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.449572703873!2d140.087750375863!3d35.91149431729056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60227739fbfb3d7b%3A0x716f9fecd11a6be7!2z44CSMzAwLTE1MzUg6Iyo5Z-O55yM5Y-W5omL5biC5riF5rC077yR77yR77yR77yS!5e0!3m2!1sja!2sjp!4v1686045190572!5m2!1sja!2sjp"
			style="border:0;"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
		<div class="scroll-container" style="width: 100%;">
			<table>
				<tbody>
					{#each infos as { header, data }}
						<tr>
							<th scope="col">{header}</th>
							<td>{@html data}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<style>
	table {
		width: 100%;
		height: 100%;
	}

	th,
	td {
		border: 1px solid black;
		padding: 0.9rem;
	}

	tr:nth-child(even) {
		background: #abe1dc;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		justify-items: center;
	}

	iframe {
		width: 100%;
		aspect-ratio: 3 / 2;
	}

	@media (width < 852px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
