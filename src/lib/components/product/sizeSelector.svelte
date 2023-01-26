<script>
    export let options;

    let selectedSymbol = 0;
</script>

<div class="wrapper">
    {#each options.data as option, i}
        <div class="option" class:active="{selectedSymbol === i}" on:click="{() => selectedSymbol = i}">
            {option.attributes.symbol}
        </div>
    {/each}
</div>

<style>
    .wrapper {
        display: flex;
        gap: 8px;
    }

    .option {
        padding: 5px 10px;
        border-radius: 25px;
        text-transform: uppercase;
        user-select: none;
        -webkit-user-select: none;
        font-family: 'Outfit', sans-serif;
        font-size: 14px;
        box-shadow: 3px -2px 4px #FFFFFF, 0 4px 4px rgba(0, 0, 0, 0.12), inset -2px 4px 4px #FFFFFF;
        background-color: #EEEEEE;
    }

    .option:hover {
        cursor: pointer;
    }

    .option.active {
        font-weight: 700;
        box-shadow: inset 2px -3px 4px #FFFFFF, inset -2px 4px 4px rgba(0, 0, 0, 0.21);
        color: #21234C;
    }
</style>