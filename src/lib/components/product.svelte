<script>
    import { getContext } from 'svelte';
    import { settings } from '$lib/stores';

    const home = getContext('home');
</script>

<div class="card">
    <img src="{$settings.cmsUrl}{$home.data.home.data.attributes.products.data[0].attributes.image.data.attributes.url}"/>
    <h3>{$home.data.home.data.attributes.products.data[0].attributes.name}</h3>
    <div>
        <span>${$home.data.home.data.attributes.products.data[0].attributes.price}</span>
        <button>see more</button>
    </div>
</div>

<style>
    .card {
        padding: 22px;
/*        display: flex;*/
/*        flex-direction: column;*/
        border-radius: 15px;
        filter: drop-shadow(-4px -3px 15px #FFFFFF) drop-shadow(2px 2px 19px rgba(79, 79, 79, 0.4));
        background-color: #FFFFFF;
    }

    .card img {
        margin-bottom: 22px;
/*        max-width: 250px;*/
        border-radius: 10px;
    }
</style>
