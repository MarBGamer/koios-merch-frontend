<script>
    import { SearchIcon } from 'svelte-feathers';

    export let searchPlaceholder;
</script>

<div class="bar">
    <SearchIcon color="#A9A9A9" size="18" class="icon" />
    <input class="input" placeholder="{searchPlaceholder}" />
</div>

<style>
    .bar {
        padding: 10px 30px 10px 15px;
        display: flex;
        border-radius: 20px;
        box-shadow: inset -2px -3px 4px #FFFFFF, inset 1px 3px 4px rgba(62, 37, 211, 0.22);
        background-color: #D9D9D9;
    }

    .bar .icon {
        margin: auto 0;
    }

    .bar .input {
        margin: auto 0 auto 5px;
        border: none;
        font-size: 16px;
        font-family: 'Outfit', sans-serif;
        color: #21234C;
        background-color: transparent;
    }

    .bar .input::placeholder {
        text-transform: lowercase;
        color: #A9A9A9;
    }

    .bar .input:focus {
        outline: none;
    }
</style>
