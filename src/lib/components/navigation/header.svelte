<script>
    import { page } from '$app/stores';
    import logo from '$lib/assets/logo.png';
    import Search from '$lib/components/navigation/search.svelte';
    import Account from '$lib/components/navigation/account.svelte';
    import Cart from '$lib/components/navigation/cart.svelte';

    export let searchPlaceholder;
    export let shopLabel;
    export let galleryLabel;
    export let aboutLabel;
</script>

<header class="container">
    <div class="pre">
        <Search searchPlaceholder="{searchPlaceholder}" />
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
            <li class:active="{$page.url.pathname==='/shop'}"><a href="/shop">{shopLabel}</a></li>
            <li class:active="{$page.url.pathname==='/gallery'}"><a href="/gallery">{galleryLabel}</a></li>
            <li class:active="{$page.url.pathname==='/about'}"><a href="/about">{aboutLabel}</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        padding-top: 30px;
    }

    header .pre {
        display: flex;
        justify-content: flex-end;
    }

    header nav {
        margin-top: 25px;
        padding: 10px 90px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        font-family: 'Outfit', sans-serif;
        box-shadow: 0 -3px 7px #FFFFFF, 0 4px 11px rgba(62, 37, 211, 0.11), inset 7px 4px 10px #FFFFFF;
        background-color: #EEEEEE;
    }

    header nav .logo {
        margin: auto 0;
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
        padding: 15px 25px;
    }

    header nav ul li.active {
        border-radius: 5px;
        box-shadow: inset -3px -3px 19px rgba(255, 255, 255, 0.7), inset -2px -7px 27px rgba(255, 255, 255, 0.31), inset 1px 2px 4px rgba(76, 18, 214, 0.44);
        background-color: #EEEEEE;
    }

    header nav ul li a {
        text-decoration: none;
        color: #707070;
    }

    header nav ul li.active a {
        color: #21234C;
    }
</style>