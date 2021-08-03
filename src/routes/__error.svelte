
<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	let dangerHtml = '<h1>This is danger</h1>';
	export let title;
</script>

{@html dangerHtml}

<div
	contenteditable="true"
	bind:innerHTML={dangerHtml}
></div>

<h1>{title}</h1>