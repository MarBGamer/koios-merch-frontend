<script>
    import { getContext } from 'svelte';
    import Slider from '$lib/components/slider.svelte';
    import Card from '$lib/components/card.svelte';

    const home = getContext('home');
</script>

<div class="hero">
    <div class="content">
        <h1>{$home.data.home.data.attributes.hero.heroSlogan}</h1>
        <h1>{$home.data.home.data.attributes.hero.heroHeader}</h1>
        <p>{$home.data.home.data.attributes.hero.heroInformation}</p>
        <button>{$home.data.home.data.attributes.hero.heroButton}</button>
    </div>
    <div class="slider">
        <Slider slides="{$home.data.home.data.attributes.hero.slider.data}" />
    </div>
</div>

<div class="catalog">
    <h2>{$home.data.home.data.attributes.catalog.catalogHeader}</h2>
    <div class="grid">
        {#each $home.data.home.data.attributes.catalog.cards as card}
            <Card imgUrl="{card.image.data.attributes.url}" name="{card.name}" priceLabel="{card.priceLabel}" buttonLabel="see more"  />
        {/each}
    </div>
</div>

<!--<div class="about">-->
<!--    <h2>the finest source for crypto merchandise on the web</h2>-->
<!--    <img />-->
<!--    <p></p>-->
<!--    <button></button>-->
<!--</div>-->

<style>
    .hero {
        margin: 30px 0 150px 0;
        padding: 25px;
        min-height: 500px;
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
        width: 100%;
    }

    .catalog {
        text-align: center;
        text-transform: capitalize;
    }

    .catalog h2 {
        margin-bottom: 30px;
    }

    .catalog .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>