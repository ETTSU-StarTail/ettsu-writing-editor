<script lang="ts">
	export let count: number = 0;
	export let content: string = '';
</script>

<div class="writing">
	<div class="writing__info writing__header">
		<label class="theme">
			<div class="theme__label">テーマ</div>
			<input type="text" />
		</label>
	</div>
	<textarea
		on:keyup={() => {
			count = content.length;
		}}
		class="writing__content"
		name="writing__content"
		cols="30"
		rows="10"
		bind:value={content}
	/>
	<div class="writing__info writing__footer">
		<span class="writing__count">{count} 文字</span>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.theme {
		display: grid;

		grid-template-columns: 5rem 1fr;
		grid-template-rows: 1fr;

		width: 100%;

		background-color: cornflowerblue;
	}

	.theme__label {
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

	.theme input {
		grid-row: 1 / 1;
		grid-column: 2 / 3;

		width: 100%;

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

	.writing__info {
		display: flex;
		flex-flow: row nowrap;
		gap: 0.5rem;
		background-color: lightgray;
	}

	.writing__content {
		border: none;
		resize: vertical;
		overflow-y: scroll;
		line-height: 1.5rem;
	}

	.writing__header {
		text-align: right;
	}

	.writing__footer {
		justify-content: flex-end;
	}

	.writing__count {
		padding: 0.5rem;

		text-align: center;
	}

	.writing__content {
		width: 100%;
	}
</style>
