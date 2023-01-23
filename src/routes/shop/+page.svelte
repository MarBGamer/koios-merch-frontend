<script>
    import { query } from 'svelte-apollo';
    import { GET_PRODUCTS } from '$lib/queries';
    import Pagination from '$lib/components/pagination.svelte';

    const products = query(GET_PRODUCTS);
</script>

{#if $products.loading}
    <p>Loading...</p>
{:else if $products.error}
    <p>An error occured</p>
{:else}
    <Pagination />

    <div class="filters">
        <h2>category</h2>
    </div>

<!--    <div class="grid">-->
<!--        {#each $products.data.products.data as product}-->
<!--            <Product />-->
<!--        {/each}-->
<!--    </div>-->
{/if}

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>