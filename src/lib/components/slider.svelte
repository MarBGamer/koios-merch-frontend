<script>
    import { onMount } from 'svelte';
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feathers';
    import { settingsStore } from '$lib/stores';
    import Glide from '@glidejs/glide';

    export let slides = [];
    export let controls = false;

    onMount(() => {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            autoplay: 5000,
            hoverpause: true,
        }).mount();
    });
</script>

<div class="glide">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            {#each slides as slide}
                <li class="glide__slide">
                    <div class="wrapper">
                        <img src="{$settingsStore.cmsUrl}{slide.attributes.url}" alt="{slide.attributes.alternativeText}" />
                    </div>
                </li>
            {/each}
        </ul>
    </div>

    {#if controls}
        <div class="glide__bullets" data-glide-el="controls[nav]">
            {#each slides as slide, i}
                <button class="glide__bullet" data-glide-dir="={i}"></button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper img {
        width: 100%;
        border-radius: 10px;
    }

    button {
        background: #FFFFFF;
    }
</style>
