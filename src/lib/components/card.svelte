<script>
    import { getContext } from 'svelte';
    import { goto } from '$app/navigation';
    import { settingsStore } from '$lib/stores';

    export let imgUrl;
    export let imgAlt;
    export let name;
    export let priceLabel;
    export let buttonLabel;
    export let buttonRoute;
</script>

<div class="card">
    <img src="{$settingsStore.cmsUrl}{imgUrl}" alt="{imgAlt}" />
    <h3>{name}</h3>
    <div class="bottom">
        <span class="price">{priceLabel}</span>
        <button on:click="{() => goto(buttonRoute)}">{buttonLabel}</button>
    </div>
</div>

<style>
    .card {
        padding: 22px 22px 15px 22px;
        border: 4px solid #FFFFFF;
        border-radius: 15px;
        text-align: left;
        text-transform: capitalize;
        font-family: 'Roboto', sans-serif;
        color: #21234C;
        filter: drop-shadow(-4px -3px 15px #FFFFFF) drop-shadow(2px 2px 19px rgba(79, 79, 79, 0.4));
        box-shadow: inset 0 0 15px 5px #FFFFFF;
        background-color: #EEEEEE;
    }

    .card img {
        margin-bottom: 15px;
        width: 100%;
        border-radius: 10px;
    }

    .card h3 {
        margin-bottom: 10px;
        text-transform: capitalize;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }

    .card .bottom {
        display: flex;
        justify-content: space-between;
    }

    .card .bottom .price {
        margin-right: 10px;
        font-size: 14px;
        font-weight: 700;
    }

    .card .bottom button {
        padding: 8px 15px;
        border-radius: 100px;
        font-size: 14px;
    }
</style>
