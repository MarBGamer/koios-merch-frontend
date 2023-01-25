<script>
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feathers';
</script>

<div class="wrapper">
    <div class="arrow">
        <ChevronLeftIcon />
    </div>

    <div class="arrow">
        <ChevronRightIcon />
    </div>
</div>

<style>
    .wrapper {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }

    .wrapper .arrow {
        width: 24px;
        height: 24px;
        border-radius: 100px;
        box-shadow: -2px -2px 4px #FFFFFF, 0 4px 4px rgba(0, 0, 0, 0.12), inset 1px 4px 2px #F9F9F9;
        color: #8C8C8C;
        background: #EEEEEE;
    }
</style>