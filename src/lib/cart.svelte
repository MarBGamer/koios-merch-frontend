<script>
    import { count } from '$lib/stores';

    let products = [];

    const unsubscribe = count.subscribe((value) => {
        products = value;
    });
</script>

<h1>Cart</h1>
<ul>
    {#each products as product}
        <li>{product.name}</li>
    {/each}
</ul>