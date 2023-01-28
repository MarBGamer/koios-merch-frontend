<script>
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feathers';
    import { filtersStore } from '$lib/stores';

    export let meta;

    let activePage = meta.page;

    function nextPage() {
        if ($filtersStore.page !== (activePage + 1) && activePage + 1 <= meta.pageCount) {
            filtersStore.update(f => {
                f.page = activePage + 1;
                return f;
            });
        }
    }

    function previousPage() {
        if ($filtersStore.page !== activePage - 1 && activePage - 1 > 0) {
            filtersStore.update(f => {
                f.page = activePage - 1;
                return f;
            });
        }
    }
</script>

<div class="top-wrapper">
    <div class="pagination">
        <div class="arrow" on:click="{previousPage}">
            <ChevronLeftIcon size="16" />
        </div>
        <div class="bar">
            {#each Array(meta.pageCount) as _, i}
                <div class="page" class:active="{i + 1 === meta.page}">{i + 1}</div>
            {/each}
        </div>
        <div class="arrow" on:click="{nextPage}">
            <ChevronRightIcon size="16" />
        </div>
    </div>
</div>

<div class="bottom-wrapper">
    <div class="pagination">
        <div class="arrow" on:click="{previousPage}">
            <ChevronLeftIcon size="16" />
        </div>
        <div class="bar">
            {#each Array(meta.pageCount) as _, i}
                <div class="page" class:active="{i + 1 === meta.page}">{i + 1}</div>
            {/each}
        </div>
        <div class="arrow" on:click="{nextPage}">
            <ChevronRightIcon size="16" />
        </div>
    </div>
</div>

<style>
    .top-wrapper {
        position: absolute;
        top: -45px;
        right: 0;
    }

    .bottom-wrapper {
        position: absolute;
        bottom: -45px;
        right: 0;
    }

    .pagination {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }

    .pagination .arrow {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        box-shadow: -2px -2px 4px #FFFFFF, 0 4px 4px rgba(0, 0, 0, 0.12), inset 1px 4px 2px #F9F9F9;
        color: #8C8C8C;
        background-color: #EEEEEE;
    }

    .pagination .bar {
        padding: 0 5px;
        height: 24px;
        min-width: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 28px;
        font-family: 'Outfit', sans-serif;
        font-size: 14px;
        color: #8C8C8C;
        box-shadow: -1px -2px 4px 1px #FFFFFF, 0 4px 4px rgba(0, 0, 0, 0.11);
        background-color: #EEEEEE;
    }

    .pagination .bar .page {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pagination .bar .page.active {
        border-radius: 100px;
        box-shadow: -4px -1px 6px rgba(255, 255, 255, 0.5), 2px 3px 4px #FFFFFF, inset 1px 2px 6px rgba(0, 0, 0, 0.22);
        background-color: #E9E9E9;
    }
</style>