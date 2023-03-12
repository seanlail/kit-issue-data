<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { User } from '../types';

	export let user: User | undefined;

	async function logout() {
		console.log(Date.now(), 'Header click login');
		try {
			const response = await fetch('/logout', {
				method: 'POST'
			});
			if (response.ok) {
				await response.json();
				console.log(Date.now(), 'Header click login success');
				goto('/');
			} else {
				console.log(Date.now(), 'Header click login failed');
			}
		} catch (error) {
			console.log(Date.now(), 'Header click login failed');
		}
	}
</script>

<header>
	<h1>Example</h1>
	{#if $page.route.id === '/login'}
		<span>Click the button</span>
	{:else if user}
		<button type="button" on:click={logout}>Logout</button>
	{:else}
		<a href="/login">Login</a>
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	a,
	button,
	span {
		margin: 1rem;
		padding: 1rem;
	}
</style>
