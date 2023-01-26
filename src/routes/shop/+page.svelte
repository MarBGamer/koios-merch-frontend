<script>
    import { query } from 'svelte-apollo';
    import { GET_SHOP } from '$lib/queries';
    import Pagination from '$lib/components/shop/pagination.svelte';
    import Filters from '$lib/components/shop/filters.svelte';
    import Products from '$lib/components/shop/products.svelte';

    const shop = query(GET_SHOP);
</script>

{#if $shop.loading}
    <p>Loading...</p>
{:else if $shop.error}
    <p>An error occured</p>
{:else}
<!--    <Pagination />-->
    <div class="wrapper">
        <Filters filtersLabel="{$shop.data.shop.data.attributes.filters.filtersHeader}" categories="{$shop.data.categories}" />
        <Products buttonLabel="{$shop.data.shop.data.attributes.general.buttonLabel}" />
    </div>
{/if}

<style>
    .wrapper {
        margin: 30px 0;
        display: flex;
    }
</style>