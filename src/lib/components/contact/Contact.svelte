<script lang="ts">
	import { shop } from '$lib/data/shop';
	import { link } from '$lib/link-generator';
</script>

<p>
	当店へのご連絡は、電話番号・フォームのいづれかから行うことができます。<br />また、当店オーナーのLineアカウントをお友達登録することで、当店に関する質問をお気軽にできます。<br
	/>Lineは、QRコードまたはリンク、どちらのやり方からでも大丈夫です。
</p>
<hr />
<section>
	<div class="contact">
		<h2>電話番号:</h2>
		<p>電話（<a href={`tel:${shop.tel}`}>{shop.tel}</a>）は営業時間内でのみ受け付けています。<br />営業時間内であっても、お客様に対応している場合は出られない可能性があります。</p>
	</div>
	<div class="contact">
		<h2>フォーム:</h2>
		<p>
			<a href={shop.contactForm} target="_blank">当店のお問い合わせフォーム</a
			>からご回答いただけます。回答するには、Googleアカウントが必要になります。
		</p>
	</div>
	<div class="contact">
		<h2>Line :</h2>
		<div>
			<img
				src={link('images/qr')}
				width="400"
				height="400"
				alt={shop.name + 'のオーナーのQRコード'}
			/>
			<a href={link('external/line')} target="_blank">Line でお友達登録する</a>
		</div>
	</div>
</section>

<style>
	h2 {
		padding-inline-start: 0.5em;
		border-inline-start: 3px solid var(--theme);
	}

	h2 + * {
		margin-block-start: 1.7rem;
		margin-inline-start: 1.7rem;
	}

	section {
		display: grid;
		gap: 4rem;
	}
</style>
