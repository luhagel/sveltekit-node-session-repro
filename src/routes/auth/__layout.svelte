<script context="module" lang="ts">
	export async function load({ session }) {
		if (session.token) {
			return {
				redirect: `/`,
				status: 302
			};
		}
		return {
			props: {}
		};
	}
</script>

<main>
	<slot />
</main>
