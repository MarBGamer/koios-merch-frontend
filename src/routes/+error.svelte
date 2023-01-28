<script>
    import { page } from '$app/stores';
    import { settingsStore } from '$lib/stores';
    import clothes from '$lib/assets/clothes.png';

    let isComingSoon = $page.status === 404;
</script>

<svelte:head>
    {#if isComingSoon}
        <title>Coming Soon {$settingsStore.baseTitle}</title>
    {:else}
        <title>Error {$settingsStore.baseTitle}</title>
    {/if}
</svelte:head>

{#if isComingSoon}
    <div class="title">Coming Soon</div>
    <img class="image" src="{clothes}" alt="clothing rack" />
{:else}
    <div class="title">An error occured</div>
    <p class="text">Please try again later</p>
{/if}

<style>
    .title {
        margin: 60px 0 10px 0;
        text-align: center;
        text-transform: capitalize;
        font-family: 'Outfit', sans-serif;
        font-size: 64px;
        color: rgba(33, 35, 76, 0.5);
        opacity: 0.7;
    }

    .text {
        margin-bottom: 500px;
        text-align: center;
    }

    .image {
        margin: 0 auto 500px auto;
        display: flex;
        max-width: 500px;
    }
</style>