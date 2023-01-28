<script>
    import { onDestroy } from 'svelte';
    import { filtersStore } from '$lib/stores';

    export let filtersLabel;
    export let categories;

    let filters;
    const unsubscribe = filtersStore.subscribe((value) => {
        filters = value;
    });

    function changeCategory(id) {
        if (filters.category === id) {
            filtersStore.update(f => {
                f.category = undefined;
                return f;
            });
        } else {
            filtersStore.update(f => {
                f.category = id;
                return f;
            });
        }
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="wrapper">
    <div class="background">
        <h3>{filtersLabel}</h3>
        {#each categories.data as category}
            <h4 class:active="{filters.category === category.id}" on:click="{() => changeCategory(category.id)}">{category.attributes.name}</h4>
        {/each}
    </div>
</div>

<style>
    .wrapper .background {
        margin-right: 20px;
        padding: 15px 15px 250px 15px;
        border-radius: 5px;
        box-shadow: -5px -4px 8px #FFFFFF, 3px 2px 3px rgba(171, 171, 255, 0.4);
        background-color: #E2E2E2;
    }

    .wrapper .background h3 {
        margin: 0 30px 15px 0;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
    }

    .wrapper .background h4 {
        margin-bottom: 5px;
        padding: 5px 10px;
        text-transform: capitalize;
        user-select: none;
        -webkit-user-select: none;
    }

    .wrapper .background h4:hover {
        cursor: pointer;
    }

    .wrapper .background h4.active {
        border-radius: 5px;
        box-shadow: inset -1px -2px 4px #FFFFFF, inset 0 4px 4px rgba(120, 120, 120, 0.3);
        color: #000000;
        background-color: #EFEFEF;
    }
</style>