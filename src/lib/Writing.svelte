<script lang="ts">
	import { slide } from 'svelte/transition';
	import { editors } from './store';

	export let id: number = 0;
	export let count: number = 0;
	export let title: string = '';
	export let content: string = '';

	function remove(): void {
		console.log($editors);
		$editors = $editors.filter((value, index, arr) => {
			if (value.id != id) return value;
		});

		console.log($editors);
	}

	function copyContent(): void {
		navigator.clipboard.writeText(`Title:\n${title}\ncontent:\n${content}`);
	}

	function clearContent(): void {
		title = '';
		content = '';
	}
</script>

<div transition:slide class="writing">
	<div class="writing-info writing-info--with-padding bg--info">
		<div class="writing-info__controls">
			<span class="writing-info__text color--info">editor id: {id}</span>
		</div>
	</div>
	<div class="writing-info">
		<label class="title">
			<div class="title__label">Title</div>
			<input class="title__input" type="text" placeholder="Replace me!" bind:value={title} />
		</label>
	</div>
	<textarea
		on:keyup|trusted|self={() => {
			count = content.length;
		}}
		class="writing__content"
		name="content"
		cols="30"
		rows="10"
		bind:value={content}
	/>
	<div class="writing-info bg--info">
		<div class="writing-info__controls">
			<button on:click|trusted|self={copyContent} class="writing-info__button">Copy</button>
			<button on:click|trusted|self={clearContent} class="writing-info__button">Clear</button>
		</div>
		<div class="writing-info__controls writing-info__controls--right">
			<button
				on:click|trusted|self={remove}
				class="writing-info__button writing-info__button--danger"
			>
				Delete
			</button>
			<span class="writing-info__text color--info">{count} 文字</span>
		</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.title {
		display: grid;

		grid-template-columns: 5rem 1fr;
		grid-template-rows: 1fr;

		width: 100%;
		font-size: 1.5rem;
		font-weight: bold;

		background-color: cornflowerblue;
	}

	.title__label {
		grid-row: 1 / 1;
		grid-column: 1 / 2;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;

		padding: 0.5rem;

		text-align: center;
		font-weight: bold;
	}

	.title__input {
		grid-row: 1 / 1;
		grid-column: 2 / 3;

		width: 100%;
		line-height: 1.5rem;

		border: none;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 0.5rem 1rem;
		outline: none;
	}

	.writing {
		display: flex;
		flex-flow: column nowrap;
		background-color: white;
		border: solid 1px gray;
	}

	.writing-info {
		display: flex;
		flex-flow: row nowrap;
		gap: 0.2rem;
	}

	.writing-info--with-padding {
		padding: 0.3rem;
	}

	.writing__content {
		border: none;
		resize: vertical;
		overflow-y: scroll;
		line-height: 1.5rem;
		outline: none;
		padding: 0.5rem;
		font-size: 1rem;
		width: 100%;
	}

	.writing-info__text {
		text-align: center;
		padding-right: 0.3rem;
	}

	.writing-info__button {
		height: 2rem;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.writing-info__button--danger {
		background-color: lightcoral;
	}

	.writing-info__controls {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		gap: 1rem;
		text-align: center;
		align-items: center;
	}

	.writing-info__controls--right {
		margin-left: auto;
		padding-right: 0.5rem;
	}

	.bg--info {
		background-color: rgb(236, 236, 236);
	}

	.color--info {
		color: gray;
	}
</style>
