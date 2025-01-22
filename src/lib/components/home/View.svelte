<script lang="ts">
	import { link } from '$lib/link-generator';

	interface Item {
		image: {
			src: string;
			alt: string;
		};
		text: string;
	}

	const list: Item[] = [
		{
			image: {
				src: link('images/exterior/parking'),
				alt: '黄色い矢印が特徴の立て看板の先にあるVell moの駐車場'
			},
			text: '細い道を入ったところにあるおしゃれな美容室'
		},
		{
			image: {
				src: link('images/exterior/wall'),
				alt: 'たくさんの緑の植物に囲まれたVell mo美容室'
			},
			text: '植物に囲まれた、穏やかな時間'
		},
		{
			image: {
				src: link('images/exterior/front'),
				alt: '左右に手入れのされた植物が置かれているVell mo の玄関先'
			},
			text: '扉の先でお待ちしております。'
		}
	];
</script>

<section>
	{#each list as { image, text }, index}
		<div class="split" class:reverse={index % 2 === 1}>
			<img class="rounded" src={image.src} alt={image.alt} width="600" height="450" />
			<p>{text}</p>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: 30px;
	}

	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		gap: 2rem;

		&.reverse *:first-child {
			order: 1;
		}
	}

	p {
		flex-basis: max-content;
	}

	@media (width < 800px) {
		section {
			gap: 9rem;
		}

		.split {
			grid-template-columns: 1fr;
			gap: 1rem;

			&.reverse *:first-child {
				order: 0;
			}

			p {
				margin-block-start: 1rem;
			}
		}
	}
</style>
