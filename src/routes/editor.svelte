<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import Writing from '$lib/Writing.svelte';

	let editors = [{}];

	function addWriting() {
		console.log(editors[0]);

		const l = editors.length;
		editors[l] = {
			counter: 0,
			content: ''
		};
	}
	$: console.log(editors);
</script>

<svelte:head>
	<title>ETTSU-Writing-Editor</title>
	<meta name="description" content="ETTSU-Writing-Editor" />
</svelte:head>

<div class="content">
	<h1>ETTSU Writing Editor</h1>

	<p>なんかしらの文章を考えなきゃいけないときに使う</p>

	<button on:click={addWriting}>Add Editor</button>

	{#each editors as editor}
		<svelte:component this={Writing} counter={editor.counter} content={editor.content} />
	{/each}
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
