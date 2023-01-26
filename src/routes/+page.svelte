<script>
    import { getContext } from 'svelte';
    import { goto } from '$app/navigation';
    import { settingsStore } from '$lib/stores';
    import Slider from '$lib/components/slider.svelte';
    import Card from '$lib/components/card.svelte';

    const home = getContext('home');
</script>

<div class="hero">
    <div class="content">
        <h1>{$home.data.home.data.attributes.hero.heroSlogan}</h1>
        <h1>{$home.data.home.data.attributes.hero.heroHeader}</h1>
        <p>{$home.data.home.data.attributes.hero.heroInformation}</p>
        <button on:click="{() => goto('/shop')}">{$home.data.home.data.attributes.hero.heroButton}</button>
    </div>
    <div class="slider">
        <Slider slides="{$home.data.home.data.attributes.hero.slider.data}" />
    </div>
</div>

<div class="catalog">
    <h2>{$home.data.home.data.attributes.catalog.catalogHeader}</h2>
    <div class="grid">
        {#each $home.data.home.data.attributes.catalog.cards as card}
            <Card
                imgUrl="{card.image.data.attributes.url}"
                imgAlt="{card.image.data.attributes.alternativeText}"
                name="{card.name}"
                priceLabel="{card.priceLabel}"
                buttonLabel="see more"
                buttonRoute="/shop"
            />
        {/each}
    </div>
</div>

<div class="about">
    <h2>{$home.data.home.data.attributes.about.aboutHeader}</h2>
    <div class="wrapper">
        <img
            src="{$settingsStore.cmsUrl}{$home.data.home.data.attributes.about.image.data.attributes.url}"
            alt="{$home.data.home.data.attributes.about.image.data.attributes.alternativeText}"
        />
        <article>
            <p>{$home.data.home.data.attributes.about.description}</p>
            <button class="secondary" on:click="{() => goto('/about')}">{$home.data.home.data.attributes.about.buttonLabel}</button>
        </article>
    </div>
</div>

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
        color: transparent;
        background: linear-gradient(269.95deg, #F00CB0 -18.3%, #5211D5 95.84%);
        background-clip: text;
        -webkit-background-clip: text;
    }

    .hero .slider {
        width: 100%;
    }

    .catalog {
        margin-bottom: 250px;
        text-align: center;
        text-transform: capitalize;
    }

    .catalog h2 {
        margin-bottom: 30px;
    }

    .catalog .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 100px;
    }

    .about h2 {
        margin-bottom: 100px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 22px;
        font-weight: 400;
        color: transparent;
        background: linear-gradient(269.95deg, #3E25D3 5.22%, #F318AC 116.89%);
        background-clip: text;
        -webkit-background-clip: text;
    }

    .about .wrapper {
        display: flex;
    }

    .about .wrapper article {
        margin: auto 30px;
        text-align: center;
        font-size: 12px;
    }

    .about .wrapper article p {
        margin-bottom: 25px;
    }
</style>