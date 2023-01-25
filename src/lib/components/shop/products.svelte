<script>
    import { onDestroy } from 'svelte';
    import { query } from 'svelte-apollo';
    import { GET_PRODUCTS } from '$lib/queries';
    import { filtersStore } from '$lib/stores';
    import Card from '$lib/components/card.svelte';

    let querySettings = { page: 1 };
    let products;

    let filters;
    const unsubscribe = filtersStore.subscribe((value) => {
        filters = value;
    });

    $: if(filters) {
        if (filters.category !== undefined) {
            querySettings.id = filters.category;
        } else {
            delete querySettings.id;
        }

        products = query(GET_PRODUCTS, {
            variables: querySettings
        });
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if !$products.loading && !$products.error}
    <div class="grid">
        {#each $products.data.products.data as product}
            <Card
                imgUrl="{product.attributes.image.data.attributes.url}"
                imgAlt="{product.attributes.image.data.attributes.alternativeText}"
                name="{product.attributes.name}"
                priceLabel="{product.attributes.price}"
                buttonLabel="add to cart"
                buttonRoute="/shop/{product.id}"
            />
        {/each}
    </div>
{/if}

<style>
    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    
</style>