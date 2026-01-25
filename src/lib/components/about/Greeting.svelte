<section>
	<h2><span>あいさつ</span></h2>
	<p>
		はじめまして、当美容室のオーナー兼スタイリストの浜野圭子と申します。<br />

		私は当店にて、お客様の美と自信を引き出すお手伝いをさせていただいております。<br />

		当店は、お客様がリラックスできる環境を提供し、自分自身を最高に感じていただけるよう心掛けております。
	</p>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 0.5fr 1fr;
	}

	h2 {
		--_border: 1px solid var(--theme);
		border-right: var(--_border);
		padding-inline: 20px;
		display: grid;
		place-content: center;
		line-height: 2;
	}

	p {
		padding-block: 2rem;
		padding-inline-start: 2rem;
		line-height: 1.8;
		max-width: 40em;
	}

	@media (width < 752px) {
		section {
			width: 90%;
			margin: auto;
			grid-template-columns: 1fr;
		}

		h2 {
			border-right: none;
			border-block-end: var(--_border);
			padding-inline-end: 1.2rem;
			margin-block-end: 1.2rem;
		}

		p {
			padding: 0;
		}
	}
</style>
