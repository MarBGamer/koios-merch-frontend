<script>
    import Search from '$lib/components/search.svelte';
    import Account from '$lib/components/account.svelte';
    import Cart from '$lib/components/cart.svelte';
</script>

<header class="container">
    <div class="pre">
        <Search />
        <Account />
        <Cart />
    </div>

    <nav>
        <h1>LOGO</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/gallery">NFT Gallery</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>

</header>

<main class="container">
    <slot />
</main>

<style>
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
        padding: 25px 90px;
        display: flex;
        justify-content: space-between;
        border-radius: 12px;
        font-family: 'Outfit', sans-serif;
        background-color: #D9D9D9;
    }

    header nav h1 {
        margin: 0;
    }

    header nav ul {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 50px;
        justify-content: space-around;
        list-style: none;
    }

    header nav ul li {
        margin: auto 0;
    }

    header nav ul li a {
        text-decoration: none;
        color: #000000;
    }
</style>