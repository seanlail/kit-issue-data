<script lang="ts">
	import Header from '$lib/Header.svelte';

	import type { LayoutData } from './$types';
	import './styles.css';

	export let data: LayoutData;
</script>

<div class="app">
	<Header user={data.user} />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
