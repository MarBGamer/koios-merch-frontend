<script>
    import { selectedAccount, chainId, defaultEvmStores } from 'svelte-web3';
    import { onMount } from 'svelte';

    onMount( defaultEvmStores.setProvider );
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>account: {$selectedAccount} / chainId: {$chainId}</p>
