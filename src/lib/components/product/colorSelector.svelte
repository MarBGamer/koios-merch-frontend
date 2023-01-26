<script>
    export let options;

    let selectedColor = 0;
</script>

<div class="wrapper">
    {#each options.data as option, i}
        <div style="background-color:{option.attributes.color};" class="option" class:active="{selectedColor === i}" on:click="{() => selectedColor = i}"></div>
    {/each}
</div>

<style>
    .wrapper {
        display: flex;
        gap: 8px;
    }

    .option {
        width: 22px;
        height: 22px;
        border-radius: 100px;
    }

    .option:hover {
        cursor: pointer;
    }

    .option.active {
        border: 2px solid #EEEEEE;
        box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15), 2px 4px 5px #FFFFFF, -2px -2px 14px rgba(0, 0, 0, 0.22), inset -2px -2px 3px #FFFFFF, inset 0 4px 4px rgba(0, 0, 0, 0.33);
    }
</style>