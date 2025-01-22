<script lang="ts">
	import { shop } from '$lib/data/shop';
	import { link } from '$lib/link-generator';
</script>

<footer>
	<div class="bar">
		<img src={link('images/logo')} alt="" width="100" height="46" />
		<ul>
			<li><a href={link('home')}>ホーム</a></li>
			<li><a href={link('site')}>当サイトについて</a></li>
			<li><a href={link('contact')}>お問い合わせ</a></li>
		</ul>
	</div>
	<p><small>このサイトの権利は、{shop.name}に帰属しています。</small></p>
</footer>

<style>
	footer {
		--_text-color: white;
		width: 100%;
		margin-block-start: 13rem;
		padding-block: 3rem 2rem;
		padding-inline: var(--side-space);
		background: var(--accent);
	}

	img {
		padding: 4px;
		background: white;
	}

	.bar {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: space-between;
	}

	ul {
		flex-basis: max-content;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	a,
	p {
		color: var(--_text-color);
	}

	a {
		text-decoration-color: var(--_text-color);
	}

	p {
		text-align: center;
		margin-block-start: 2rem;
	}

	@media (width < 60rem) {
		p {
			margin-block-end: 2rem;
		}
	}
</style>
