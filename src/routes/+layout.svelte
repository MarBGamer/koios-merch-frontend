<script>
    import { ApolloClient, InMemoryCache } from '@apollo/client/core';
    import { setClient } from 'svelte-apollo';
    import { query } from 'svelte-apollo';
    import { setContext } from 'svelte';
    import { GET_HOME } from '$lib/queries';
    import Navigation from '$lib/components/navigation/header.svelte';
    import Footer from '$lib/components/navigation/footer.svelte';

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache(),
    });
    setClient(client);

    const home = query(GET_HOME);
    setContext('home', home);
</script>

{#if $home.loading}
    <p>Loading...</p>
{:else if $home.error}
    <p>An error occured.</p>
{:else}
    <Navigation
        searchPlaceholder="{$home.data.home.data.attributes.navigation.searchPlaceholder}"
        shopLabel="{$home.data.home.data.attributes.navigation.shopLabel}"
        galleryLabel="{$home.data.home.data.attributes.navigation.galleryLabel}"
        aboutLabel="{$home.data.home.data.attributes.navigation.aboutLabel}"
    />

    <main class="container">
        <slot />
    </main>

    <Footer
        contactLabel="{$home.data.home.data.attributes.footer.contactLabel}"
        faqLabel="{$home.data.home.data.attributes.footer.faqLabel}"
        shippingLabel="{$home.data.home.data.attributes.footer.shippingLabel}"
        returnsLabel="{$home.data.home.data.attributes.footer.returnsLabel}"
        tosLabel="{$home.data.home.data.attributes.footer.tosLabel}"
        privacyLabel="{$home.data.home.data.attributes.footer.privacyLabel}"
    />
{/if}

<style>
    :global(.container) {
        margin: 0 auto;
        max-width: 1400px;
    }

    :global(h1) {
        margin: 0;
        line-height: 44px;
        font-size: 40px;
        font-weight: 700;
        font-family: 'Outfit', sans-serif;
        color: #21234C;
    }

    :global(h2) {
        margin: 0;
        line-height: 33px;
        font-size: 30px;
        font-family: 'Outfit', sans-serif;
        color: #21234C;
    }

    :global(h3) {
        margin: 0;
        line-height: 22px;
        font-size: 20px;
        font-family: 'Outfit', sans-serif;
        color: #21234C;
    }

    :global(h4) {
        margin: 0;
        line-height: 110%;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Outfit', sans-serif;
        color: #151515;
    }

    :global(p) {
        margin: 0;
        line-height: 21px;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: #21234C;
    }

    :global(button) {
        padding: 12px 20px;
        border: none;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        color: #FFFFFF;
        box-shadow: -4px -3px 8px #FFFFFF, 2px 2px 15px rgba(243, 24, 172, 0.35), inset 3px 7px 14px #FFFFFF60, inset -4px 5px 17px -9px #FFFFFF, inset 0 -4px 12px -1px #F318AC;
        background: radial-gradient(171.55% 171.87% at 46.36% 77.08%, #3E25D3 0%, #F318AC 100%);
    }

    :global(button:hover) {
        cursor: pointer;
    }

    :global(button.secondary) {
        padding: 12px 20px;
        border: none;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        color: #2D2A6E;
        box-shadow: -4px -3px 8px #FFFFFF, 2px 2px 15px rgba(243, 24, 172, 0.15), inset 3px 7px 14px #FFFFFF60, inset -4px 5px 17px -9px #FFFFFF;
        background: radial-gradient(57.81% 179.96% at 49.7% 50%, #D0C2E9 0%, #B8B2D9 100%);
    }

    :global(button.secondary:hover) {
        cursor: pointer;
    }
</style>