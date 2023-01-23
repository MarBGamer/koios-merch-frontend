<script>
    import { ShoppingBagIcon } from 'svelte-feathers';
    import { count } from '$lib/stores';

    let products = [];

    const unsubscribe = count.subscribe((value) => {
        products = value;
    });
</script>

<div class="wrapper">
    <ShoppingBagIcon />
</div>

<!--<h1>Cart</h1>-->
<!--<ul>-->
<!--    {#each products as product}-->
<!--        <li>{product.name}</li>-->
<!--    {/each}-->
<!--</ul>-->

<style>
    .wrapper {
        margin: auto 15px;
    }
</style>