<script>
    import { ChevronDownIcon, ChevronUpIcon } from 'svelte-feathers';

    export let options;

    let selectedOption = 0;
    let open = false;
</script>

<div class="wrapper">
    <div class="option" on:click="{() => open = !open}">
        <div class="title">
            {options.data[selectedOption].attributes.name}
        </div>
        <div class="icon">
            {#if !open}
                <ChevronDownIcon />
            {:else}
                <ChevronUpIcon />
            {/if}
        </div>
    </div>
    {#if open}
        <div class="options-list">
            {#each options.data as option, i}
                <div class="list-option" on:click="{() => { selectedOption = i; open = false; }}">
                    {option.attributes.name}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .wrapper {
        position: relative;
        display: flex;
    }

    .option {
        padding: 8px 15px;
        min-width: 200px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        text-transform: capitalize;
        user-select: none;
        -webkit-user-select: none;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #21234C;
        box-shadow: -4px -4px 13px #FFFFFF, 0 4px 4px rgba(0, 0, 0, 0.12), inset 2px 4px 5px rgba(255, 255, 255, 0.5);;
        background-color: #EEEEEE;
    }

    .option:hover {
        cursor: pointer;
    }

    .option .title {
        margin: auto 0;
    }

    .option .icon {
        margin: auto 0;
        display: flex;
    }

    .options-list {
        position: absolute;
        top: calc(100% + 10px);
        z-index: 9999;
        border-radius: 10px;
        box-shadow: -4px -4px 13px #FFFFFF, 0 4px 4px rgba(0, 0, 0, 0.12), inset 2px 4px 5px rgba(255, 255, 255, 0.5);
        background-color: #EEEEEE;
    }

    .options-list .list-option {
        padding: 8px 15px;
        min-width: 200px;
        text-transform: capitalize;
        user-select: none;
        -webkit-user-select: none;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #646464;
    }

    .options-list .list-option:hover {
        cursor: pointer;
    }
</style>