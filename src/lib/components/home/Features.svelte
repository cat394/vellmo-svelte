<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import Icon from '../Icon.svelte';

	interface Feature {
		icon: ComponentProps<typeof Icon>;
		title: string;
		description: string;
	}

	const color = 'var(--theme)';

	const features: Feature[] = [
		{
			icon: { name: 'scissors', color },
			title: 'お好きな髪形に',
			description: 'あなたの思う髪形そのものを実現します。'
		},
		{
			icon: { name: 'cup', color },
			title: 'おしゃれな店内',
			description: '誰もが安心してくつろげる居心地の良い空間です。'
		},
		{
			icon: { name: 'tag', color },
			title: 'お手頃な価格で',
			description: '質の高い美容サービスを良心的な価格でご提供します。'
		}
	];
</script>

<section>
	{#each features as { icon, title, description }, index}
		<div class="feature" class:line={index % 2 === 1}>
			<Icon {...icon} />
			<p class="title"><b>{title}</b></p>
			<p class="description">{description}</p>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 2rem;
	}

	.feature {
		flex-basis: 500px;
		display: grid;
		justify-items: center;
		gap: 1.5rem;
		padding: 1rem;
	}

	p {
		text-align: center;
	}

	b {
		font-size: 1.5rem;
	}

	@media (width < 919px) {
		section {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
