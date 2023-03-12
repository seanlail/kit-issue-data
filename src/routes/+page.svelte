<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(Date.now(), '/+page render', !!data.user, !!$page.data.user);

	onMount(() => {
		console.log(Date.now(), '/+page mount', !!data.user, !!$page.data.user);
	});
</script>

<h1>Home</h1>

<p>Random value: {data.random}</p>
<p>User value: {data.user?.id || '-'}</p>
