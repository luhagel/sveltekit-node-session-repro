<script context="module" lang="ts">
	export async function load({ session, url }) {
		if (!session.token) {
			return {
				redirect: `/auth/login?${new URLSearchParams({
					callBackUrl: url?.pathname ?? '/'
				}).toString()}`,
				status: 302
			};
		}
		return {
			props: {
				token: session.token
			}
		};
	}
</script>

<script lang="ts">
	import { browser } from '$app/env';

	export let token;

	console.log(`${browser ? 'Client: ' : 'Server:'}`, token);
</script>

<div>
	<h2>PROTECTED</h2>
	<slot />
</div>
