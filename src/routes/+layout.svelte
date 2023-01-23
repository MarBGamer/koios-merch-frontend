<script>
    import { ApolloClient, InMemoryCache } from '@apollo/client/core';
    import { setClient } from 'svelte-apollo';
    import { query } from 'svelte-apollo';
    import { setContext } from 'svelte';
    import { GET_HOME } from '$lib/queries';
    import logo from '$lib/assets/logo.png';
    import Search from '$lib/components/search.svelte';
    import Account from '$lib/components/account.svelte';
    import Cart from '$lib/components/cart.svelte';

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache(),
    });
    setClient(client);

    const home = query(GET_HOME);
    setContext('home', home);

    const year = new Date().getFullYear();
</script>

{#if $home.loading}
    <p>Loading...</p>
{:else if $home.error}
    <p>An error occured.</p>
{:else}
    <header class="container">
        <div class="pre">
            <Search searchPlaceholder="{$home.data.home.data.attributes.searchPlaceholder}" />
            <Account />
            <Cart />
        </div>
        <nav>
            <div class="logo">
                <a href="/">
                    <img src="{logo}" alt="koios logo" />
                </a>
            </div>
            <ul>
                <li><a href="/shop">{$home.data.home.data.attributes.shopLabel}</a></li>
                <li><a href="/gallery">{$home.data.home.data.attributes.galleryLabel}</a></li>
                <li><a href="/about">{$home.data.home.data.attributes.aboutLabel}</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <slot />
    </main>

    <footer class="container">
        <div class="links">
            <ul>
                <li><a href="/contact">{$home.data.home.data.attributes.contactLabel}</a></li>
                <li><a href="/faq">{$home.data.home.data.attributes.faqLabel}</a></li>
                <li><a href="/shipping">{$home.data.home.data.attributes.shippingLabel}</a></li>
                <li><a href="/returns">{$home.data.home.data.attributes.returnsLabel}</a></li>
                <li><a href="/tos">{$home.data.home.data.attributes.tosLabel}</a></li>
                <li><a href="/privacy">{$home.data.home.data.attributes.privacyLabel}</a></li>
            </ul>
        </div>
        <div class="copyright">
            © {year} Koios Merch
        </div>
    </footer>
{/if}

<style>
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
        color: #000000;
    }

    :global(p) {
        margin: 0;
        line-height: 21px;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: #21234C;
    }

    :global(button) {
        padding: 8px 11px;
        border: 2px solid #000000;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        line-height: 25px;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        color: #FFFFFF;
        background-color: #000000;
        transition: 150ms;
    }

    :global(button:hover) {
        cursor: pointer;
        color: #000000;
        background-color: transparent;
    }

    .container {
        margin: 0 auto;
        max-width: 1200px;
    }

    header {
        padding-top: 30px;
    }

    header .pre {
        display: flex;
        justify-content: flex-end;
    }

    header nav {
        margin-top: 25px;
        padding: 20px 90px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        font-family: 'Outfit', sans-serif;
        box-shadow: 0 -3px 7px #FFFFFF, 0 4px 11px rgba(62, 37, 211, 0.11), inset 7px 4px 10px #FFFFFF;
        filter: blur (0.5px);
        background-color: #EEEEEE;
    }

    header nav ul {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 50px;
        justify-content: space-around;
        list-style: none;
        font-size: 18px;
        text-transform: lowercase;
    }

    header nav ul li {
        margin: auto 0;
    }

    header nav ul li a {
        text-decoration: none;
        color: #707070;
    }

    footer {
        border-radius: 10px;
        box-shadow: inset 0 4px 48px #FFFFFF, inset 0 4px 19px #FFFFFF;
        background-color: #D9D9D9;
    }

    footer .links {
        margin: 30px 20px 10px 20px;
        padding-top: 20px;
    }

    footer .links ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        list-style: none;
        text-transform: capitalize;
        font-size: 18px;
        font-family: 'Outfit', sans-serif;
    }

    footer .links ul li a {
        text-decoration: none;
        color: #000000;
    }

    footer .links ul li:not(:last-child)::after {
        content: '•';
        margin: 0 5px;
    }

    footer .copyright {
        padding-bottom: 5px;
        text-align: center;
        font-family: 'Outfit', sans-serif;
        font-size: 18px;
    }
</style>