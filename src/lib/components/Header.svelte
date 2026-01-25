<script lang="ts">
	import { link } from '$lib/link-generator';
	import Icon from '$lib/components/Icon.svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let dialog = $state<HTMLDialogElement>();

	function openDialog() {
		if (!dialog) return;

		dialog.showModal();
	}

	function closeDialog() {
		if (!dialog) return;

		dialog.close();
	}

	onNavigate(() => {
		closeDialog();
	});
</script>

<header class="desktop">
	<nav>
		<a href={link('home')} aria-label="ホーム">
			<img src={link('images/logo')} alt="" width="64" height="30" />
		</a>
		<ul>
			<li>
				<a href={link('about')} aria-current={page.url.pathname === link('about')}>当店について</a>
			</li>
			<li>
				<a href={link('price')} aria-current={page.url.pathname === link('price')}>メニュー</a>
			</li>
			<li>
				<a href={link('products')} aria-current={page.url.pathname === link('products')}
					>取り扱い商品</a
				>
			</li>
			<li>
				<a href={link('others')} aria-current={page.url.pathname === link('others')}
					>その他サービス</a
				>
			</li>
			<li><a href={link('external/line')} class="button" target="_blank">LINEで予約</a></li>
		</ul>
	</nav>
</header>

<header class="mobile">
	<nav class="rounded">
		<button type="button" onclick={openDialog} aria-label="メニューを開く">
			<Icon name="hamburger" width={30} height={30} color="var(--text-primary)" />
		</button>
	</nav>
</header>

<dialog bind:this={dialog}>
	<h2>ご案内</h2>
	<ul>
		<li>
			<a href={link('home')} aria-current={page.url.pathname === link('about')}>トップページ</a>
		</li>
		<li>
			<a href={link('about')} aria-current={page.url.pathname === link('about')}>当店について</a>
		</li>
		<li><a href={link('price')} aria-current={page.url.pathname === link('price')}>メニュー</a></li>
		<li>
			<a href={link('products')} aria-current={page.url.pathname === link('products')}
				>取り扱い商品</a
			>
		</li>
		<li>
			<a href={link('others')} aria-current={page.url.pathname === link('others')}>その他サービス</a
			>
		</li>
		<li><a href={link('external/line')} target="_blank">LINEで予約</a></li>
		<li>
			<button class="rounded" type="button" onclick={closeDialog} aria-label="メニューを閉じる"
				><Icon name="close" width={30} height={30} color="var(--text-primary)" /></button
			>
		</li>
	</ul>
</dialog>

<style>
	a[aria-current='true'] {
		text-decoration-color: var(--accent) !important;
	}
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
		right: 20px;
		bottom: 20px;
		z-index: 10;
		padding: 10px;
		background-color: white;
		border-radius: 1000px;
		border: 2px solid var(--theme);

		button {
			display: grid;
			place-items: center;
		}
	}

	dialog {
		width: 90%;
		margin: auto;
		max-width: 31rem;
		padding: 2.5rem;
		background: #ffffffc8;
		box-shadow: 0px 0px 25px -4px var(--bg-secondary);
		border-radius: 5px;
		animation: slide-out 300ms ease-out;

		&[open] {
			animation: slide-in 300ms ease-out;
		}

		&::backdrop {
			background: rgb(255 255 255 / 0.8);
		}

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

			> li:last-child {
				border: 0px;
				justify-self: center;
			}

			> li:last-child button {
				line-height: 0;
				border: 2px solid var(--text-primary);
				padding: 0.2rem;
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

	@media (width < 60rem) {
		header.desktop {
			display: none;
		}

		header.mobile {
			display: grid;
		}
	}

	@keyframes slide-in {
		0% {
			opacity: 0;
			translate: 300px;
			display: none;
		}

		100% {
			opacity: 1;
			translate: 0px;
			display: block;
		}
	}

	@keyframes slide-out {
		0% {
			opacity: 1;
			translate: 0px;
			display: block;
		}

		100% {
			opacity: 0;
			translate: 300px;
			display: none;
		}
	}
</style>
