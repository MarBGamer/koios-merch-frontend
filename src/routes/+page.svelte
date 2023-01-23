<script>
    import { getContext } from 'svelte';
    import Slider from '$lib/components/slider.svelte';
    import Product from '$lib/components/product.svelte';

    const home = getContext('home');
</script>

<div class="hero">
    <div class="content">
        <h1>{$home.data.home.data.attributes.heroSlogan}</h1>
        <h1>{$home.data.home.data.attributes.heroHeader}</h1>
        <p>{$home.data.home.data.attributes.heroInformation}</p>
        <button>{$home.data.home.data.attributes.heroButton}</button>
    </div>
    <div class="slider">
        <Slider slides="{$home.data.home.data.attributes.slider.data}" />
    </div>
</div>
<div class="catalog">
    <h2>Shop For</h2>
    <div class="grid">
        <Product />
    </div>
</div>

<style>
    .hero {
        margin: 30px 0 150px 0;
        padding: 25px;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        align-items: center;
        border-radius: 15px;
    }

    .hero .content {
        min-width: 60%;
    }

    .hero .content h1 {
        text-transform: capitalize;
    }

    .hero .content p {
        margin: 15px 0;
    }

    .hero .slider {
        width: 100%
    }

    .catalog {
        text-align: center;
    }

    .catalog .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>