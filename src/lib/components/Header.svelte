<script lang="ts">
	import { link } from '$lib/link-generator';
	import Icon from '$lib/components/Icon.svelte';
	import { onNavigate } from '$app/navigation';
	import { pageNameContext } from '$lib/context/pageName.svelte';
	import { fade, fly } from 'svelte/transition';

	let isMenuOpen = $state(false);

	onNavigate(() => {
		isMenuOpen = false;
	});
</script>

<header class="desktop">
	<nav>
		<a href={link('home')} aria-label="ホーム">
			<img src={link('images/logo')} alt="" width="64" height="30" />
		</a>
		<ul>
			<li><a href={link('about')}>当店について</a></li>
			<li><a href={link('price')}>メニュー</a></li>
			<li><a href={link('products')}>取り扱い商品</a></li>
			<li><a href={link('others')}>その他サービス</a></li>
			<li><a href={link('reservation')} class="button">予約する</a></li>
		</ul>
	</nav>
</header>

<header class="mobile">
	<nav class="rounded">
		<div class="side hover-effect"><a href={link('home')}>🏠 ホームへ</a></div>
		<button
			type="button"
			onclick={() => {
				isMenuOpen = !isMenuOpen;
			}}
			aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
		>
			{#if isMenuOpen}
				<Icon name="close" width={30} height={30} color="var(--text-primary)" />
			{:else}
				<Icon name="hamburger" width={30} height={30} color="var(--text-primary)" />
			{/if}
		</button>
		<div class="side hover-effect"><p>{pageNameContext.currentPageName}</p></div>
	</nav>
</header>

{#if isMenuOpen}
	<div class="menu-container" class:open={isMenuOpen} transition:fly={{ x: 300, duration: 300 }}>
		<dialog class="menu" open={isMenuOpen}>
			<h2>ご案内</h2>
			<ul>
				<li><a href={link('about')}>当店について</a></li>
				<li><a href={link('price')}>メニュー</a></li>
				<li><a href={link('products')}>取り扱い商品</a></li>
				<li><a href={link('others')}>その他サービス</a></li>
				<li><a href={link('reservation')}>予約する</a></li>
			</ul>
		</dialog>
	</div>
{/if}

{#if isMenuOpen}
	<div class="cover" class:visible={isMenuOpen} transition:fade></div>
{/if}

<style>
	header.desktop {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1;
		align-content: center;
		padding: var(--side-space);
		background: var(--bg-primary);
		box-shadow: 0px -5px 29px -3px rgba(191, 189, 191, 1);

		nav {
			max-width: var(--page-max-width);
			margin-inline: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			ul {
				display: flex;
				align-items: center;
				gap: 2rem;
			}
		}
	}

	header.mobile {
		display: none;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 10px;
		z-index: 10;

		nav {
			--border-style: 2px solid;

			width: 100%;
			max-width: 700px;
			margin: auto;
			justify-self: center;
			display: grid;
			grid-template-columns: 1fr 0.5fr 1fr;
			justify-content: space-between;
			justify-items: center;
			border: var(--border-style) var(--text-primary);
			background: var(--bg-secondary);
			overflow: hidden;

			.side {
				width: 100%;
				text-align: center;

				> * {
					padding-block: 0.5rem;
				}
			}

			> *:first-child {
				font-weight: bold;
			}

			> button {
				width: 100%;
				display: grid;
				justify-content: center;
				align-content: center;
				border-inline: var(--border-style) white;
				padding-inline: 0.3rem;
				background: transparent;
			}

			a,
			p {
				text-align: center;
				font-size: 13px;
			}

			a {
				color: var(--text-primary);
				display: block;
				height: 100%;
				text-decoration-style: dashed;
				text-decoration-color: currentColor;
			}
		}
	}

	.cover {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.8);
		z-index: 1;
	}

	.menu-container {
		display: grid;
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 2;

		&.open {
			display: grid;
		}

		.menu {
			width: 90%;
			margin: auto;
			max-width: 31rem;
			padding: 2.5rem;
			place-self: center;
			background: #ffffffc8;
			box-shadow: 0px 0px 25px -4px var(--bg-secondary);
			border-radius: 5px;

			> h2 {
				margin-block-end: 1rem;
				text-align: center;
			}

			> ul {
				display: grid;
				gap: 2rem;
				font-size: 1.3rem;

				> li {
					padding-block: 0.2rem;
					padding-inline-start: 1em;
					border-block-end: 1px solid var(--theme);
				}

				> li:hover {
					border-color: var(--accent);
				}

				a {
					display: block;
					text-decoration: none;
				}
			}
		}
	}

	@media (width < 60rem) {
		header.desktop {
			display: none;
		}

		header.mobile {
			display: grid;
		}
	}
</style>
