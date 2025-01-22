<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<h1>{title}</h1>

<style>
	h1 {
		margin-block: 3rem;
	}
</style>
