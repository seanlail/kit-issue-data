<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	console.log(Date.now(), '/login/+page prerender', !!data.user);

	onMount(() => {
		console.log(Date.now(), '/login/+page mounted', !!data.user);
	});

	async function login() {
		console.log('/login/+page click start');
		try {
			const response = await fetch('/login', {
				method: 'POST'
			});
			const result = await response.json();
			console.log('/login/+page click result', result);
			goto('/');
		} catch (error) {
			console.log('/login/+page click error', error);
		}
	}
</script>

<h1>Example login page</h1>

<p>Click the button to <button type="button" on:click={login}>Login</button></p>
