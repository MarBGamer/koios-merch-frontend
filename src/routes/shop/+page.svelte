<script>
    import { query } from 'svelte-apollo';
    import { GET_SHOP } from '$lib/queries';
    import { settingsStore } from '$lib/stores';
    import Filters from '$lib/components/shop/filters.svelte';
    import Products from '$lib/components/shop/products.svelte';

    const shop = query(GET_SHOP);
</script>

<svelte:head>
    <title>{$shop.data?.shop.data.attributes.title ?? 'Shop'} {$settingsStore.baseTitle}</title>
</svelte:head>

{#if !$shop.loading && !$shop.error}
    <div class="wrapper">
        <Filters filtersLabel="{$shop.data.shop.data.attributes.filters.filtersHeader}" categories="{$shop.data.categories}" />
        <Products buttonLabel="{$shop.data.shop.data.attributes.general.buttonLabel}" />
    </div>
{/if}

<style>
    .wrapper {
        margin: 60px 0 30px 0;
        display: flex;
    }
</style>