<script>
    import { onDestroy } from 'svelte';
    import { query } from 'svelte-apollo';
    import { GET_PRODUCTS } from '$lib/queries';
    import { filtersStore } from '$lib/stores';
    import Card from '$lib/components/card.svelte';
    import Pagination from '$lib/components/shop/pagination.svelte';

    export let buttonLabel;

    let filters;
    const unsubscribe = filtersStore.subscribe((value) => {
        filters = value;
    });

    let products;

    $: if(filters) {
        let querySettings = { page: $filtersStore.page };
        if (filters.category !== undefined) {
            querySettings.id = filters.category;
        } else {
            delete querySettings.id;
        }

        console.log(querySettings);

        products = query(GET_PRODUCTS, {
            variables: querySettings
        });
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if !$products.loading && !$products.error}
    <div class="wrapper">
        <div class="grid">
            {#each $products.data.products.data as product}
                <Card
                    imgUrl="{product.attributes.images.data[0].attributes.url}"
                    imgAlt="{product.attributes.images.data[0].attributes.alternativeText}"
                    name="{product.attributes.name}"
                    priceLabel="{product.attributes.price}"
                    buttonLabel="{buttonLabel}"
                    buttonRoute="/shop/{product.id}"
                />
            {/each}
        </div>
        <Pagination meta="{$products.data.products.meta.pagination}" />
    </div>
{/if}

<style>
    .wrapper {
        margin-bottom: 250px;
        position: relative;
    }

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }
</style>