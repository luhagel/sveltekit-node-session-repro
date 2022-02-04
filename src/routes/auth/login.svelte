<script lang="ts">
	const handleLogin = () => {
		window.location.href = `${window.location.origin}/auth/setToken?${new URLSearchParams({
			token: 'test123',
			callBackUrl: '/protected'
		}).toString()}`;
	};
</script>

<svelte:head>
	<title>Login | Repro</title>
</svelte:head>
<div>
	<button on:click={handleLogin}>Login</button>
</div>
