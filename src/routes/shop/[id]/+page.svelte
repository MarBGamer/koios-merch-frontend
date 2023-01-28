<script>
    import { page } from '$app/stores';
    import { query } from 'svelte-apollo';
    import { GET_PRODUCT } from '$lib/queries';
    import { settingsStore } from '$lib/stores';
    import Slider from '$lib/components/slider.svelte';
    import SizeSelector from '$lib/components/product/sizeSelector.svelte';
    import DropdownSelector from '$lib/components/product/dropdownSelector.svelte';
    import ColorSelector from '$lib/components/product/colorSelector.svelte';
    import Card from '$lib/components/card.svelte';

    const product = query(GET_PRODUCT, {
        variables: { id: $page.params.id },
    });

    let activeParagraph = 0;
</script>

<svelte:head>
    <title>{$product.data?.product.data.attributes.name ?? ''} {$settingsStore.baseTitle}</title>
</svelte:head>

{#if !$product.loading && !$product.error}
    <div class="product">
        <div class="slider">
            <div class="box">
                <Slider slides="{$product.data.product.data.attributes.images.data}" controls="true" />
            </div>
        </div>
        <div class="details">
            <h1 class="name">{$product.data.product.data.attributes.name}</h1>
            <div class="price">{$product.data.product.data.attributes.price}</div>
            {#if $product.data.product.data.attributes.types.data.length > 0}
                <div class="option">
                    <div class="title">{$product.data.productPage.data.attributes.productDetails.typeLabel}</div>
                    <DropdownSelector options="{$product.data.product.data.attributes.types}" />
                </div>
            {/if}
            {#if $product.data.product.data.attributes.styles.data.length > 0}
                <div class="option">
                    <div class="title">{$product.data.productPage.data.attributes.productDetails.styleLabel}</div>
                    <DropdownSelector options="{$product.data.product.data.attributes.styles}" />
                </div>
            {/if}
            {#if $product.data.product.data.attributes.sizes.data.length > 0}
                <div class="option">
                    <div class="title">{$product.data.productPage.data.attributes.productDetails.sizeLabel}</div>
                    <SizeSelector options="{$product.data.product.data.attributes.sizes}" />
                </div>
            {/if}
            {#if $product.data.product.data.attributes.colors.data.length > 0}
                <div class="option">
                    <div class="title">{$product.data.productPage.data.attributes.productDetails.colorLabel}</div>
                    <ColorSelector options="{$product.data.product.data.attributes.colors}" />
                </div>
            {/if}
            <button>{$product.data.productPage.data.attributes.productDetails.buttonLabel}</button>
            <div class="buttons">
                <div class="button" class:active="{activeParagraph === 0}" on:click="{() => activeParagraph = 0}">{$product.data.productPage.data.attributes.productDetails.descriptionLabel}</div>
                <div class="button" class:active="{activeParagraph === 1}" on:click="{() => activeParagraph = 1}">{$product.data.productPage.data.attributes.productDetails.sizeguideLabel}</div>
            </div>
            {#if activeParagraph === 0}
                <p>{$product.data.product.data.attributes.description}</p>
            {:else if activeParagraph === 1}
                <p>{$product.data.productPage.data.attributes.productDetails.sizeguideText}</p>
            {/if}
        </div>
    </div>

    <div class="related">
        <h2>{$product.data.productPage.data.attributes.relatedProducts.relatedLabel}</h2>
        <div class="grid">
            {#each $product.data.productPage.data.attributes.relatedProducts.cards as card}
                <Card
                    imgUrl="{card.image.data.attributes.url}"
                    imgAlt="{card.image.data.attributes.alternativeText}"
                    name="{card.name}"
                    priceLabel="{card.priceLabel}"
                    buttonLabel="see more"
                    buttonRoute="{card.buttonLink}"
                />
            {/each}
        </div>
    </div>
{/if}

<style>
    .product {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 38% 1fr;
    }

    .product .slider {
        margin: 0 45px 0 20px;
    }

    .product .slider .box {
        width: 100%;
    }

    .product .details .name {
        margin-bottom: 15px;
        text-transform: capitalize;
    }

    .product .details .price {
        margin-bottom: 50px;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        color: #21234C;
    }

    .product .details .option {
        margin: 30px 0;
        display: flex;
    }

    .product .details .option .title {
        margin: auto 20px auto 0;
        text-transform: capitalize;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #646464;
    }

    .product .buttons {
        margin-top: 30px;
        display: flex;
        border-radius: 5px;
        box-shadow: inset 6px 4px 4px #FFFFFF;;
        background-color: #F7F7F7;
    }

    .product .buttons .button {
        padding: 12px 0;
        width: 100%;
        letter-spacing: 0.1em;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Outfit', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #707070;
    }

    .product .buttons .button.active {
        border-radius: 5px;
        color: #21234C;
        box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.13), inset -6px -3px 14px #FFFFFF, inset 1px 4px 5px rgba(0, 0, 0, 0.13);
        background-color: #ECECEC;
    }

    .product .buttons .button:hover {
        cursor: pointer;
    }

    .product p {
        margin-top: 15px;
        text-align: justify;
    }

    .related {
        margin: 200px 0 350px 0;
        text-align: center;
    }

    .related h2 {
        margin-bottom: 30px;
    }

    .related .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 100px;
    }
</style>