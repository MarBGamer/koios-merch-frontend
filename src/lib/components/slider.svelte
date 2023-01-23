<script>
    import { onMount } from 'svelte';
    import Glide from '@glidejs/glide';
    import { settings } from '$lib/stores';

    export let slides = [];

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
                        <img src="{$settings.cmsUrl}{slide.attributes.url}" alt="{slide.attributes.alternativeText}" />
                    </div>
                </li>
            {/each}
        </ul>
    </div>
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
</style>
