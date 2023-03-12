<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(Date.now(), '/+page render', !!data.user);
</script>

<h1>Home</h1>

<p>Random value: {data.random}</p>
<p>User value: {data.user?.id || '-'}</p>
