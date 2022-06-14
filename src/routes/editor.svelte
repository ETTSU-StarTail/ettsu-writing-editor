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
	import { editors, idIncrement } from '$lib/store.js';

	$editors = [
		{
			id: 0,
			count: 0,
			title: '',
			content: ''
		}
	];
	idIncrement.set(1);

	function addWriting(): void {
		const l: number = $editors.length;

		$editors[l] = {
			id: $idIncrement,
			count: 0,
			title: '',
			content: ''
		};
		$idIncrement++;
	}
</script>

<svelte:head>
	<title>ETTSU-Writing-Editor</title>
	<meta name="description" content="ETTSU-Writing-Editor" />
</svelte:head>

<div class="content">
	<h1>ETTSU Writing Editor</h1>

	<p>なんかしらの文章を考えなきゃいけないときに使う</p>
	<p>直近↓</p>

	<ol>
		<li>
			こんな仕事をしています（業務内容） ★300～350字程度
			<ul>
				<li>どんなプロジェクトか（学生に分かりやすく）</li>
				<li>自分が担当している業務（学生に分かりやすく）</li>
				<li>仕事のやりがい</li>
				<li>成長できた点</li>
				<li>所属チームや仲間の雰囲気</li>
			</ul>
		</li>
		<li>
			会社の魅力 ★100～130字程度
			<ul>
				<li>どんな会社か</li>
				<li>会社の雰囲気</li>
				<li>仲間の雰囲気</li>
				<li>入社の決め手</li>
				<li>入社して良かったと思うポイント</li>
			</ul>
		</li>
		<li>
			就活生へのメッセージ ★100～130字程度
			<ul />
		</li>
	</ol>

	<button on:click={addWriting} class="btn">Add Editor</button>

	<div class="editor-area">
		{#each $editors as editor}
			<svelte:component
				this={Writing}
				bind:id={editor.id}
				bind:count={editor.count}
				bind:title={editor.title}
				bind:content={editor.content}
			/>
		{/each}
	</div>
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

	.editor-area {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		gap: 2rem;
		width: 100%;
		max-width: var(--column-width);
		margin: 1rem auto 0 auto;
	}

	.btn {
		padding: 0.5rem 1rem;
		background-color: skyblue;
		border: none;
		border-radius: 2rem;
		outline: none;
		transition: 0.2s;
	}

	.btn:hover {
		background-color: aquamarine;
		transition: 0.1s;
	}
</style>
