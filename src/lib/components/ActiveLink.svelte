<script lang="ts">
	import { page } from '$app/state';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAnchorAttributes = $props();

	let is_active = $derived(page.url.pathname === rest.href);
</script>

<a {...rest} aria-current={is_active}>
	{@render children?.()}
</a>

<style>
	a[aria-current='true'] {
		border-bottom: 1px solid red;
	}
</style>
