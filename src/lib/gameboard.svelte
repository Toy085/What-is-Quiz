<script lang="ts">
    let props = $props();
    
    const cells = Array.from({ length: 25 }, (_, i) => i);
</script>

<div class="gameboard" id="gameBoard">
    {#each cells as index}
        <div class="cell bg-blue-500 hover:bg-blue-700" data-index={index}></div>
    {/each}
</div>

<style>
    .gameboard {
        display: grid;
        grid-template-columns: repeat(5, 250px);
        grid-template-rows: repeat(5, 150px);
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    .cell {
        width: 250px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        cursor: pointer;
        border-radius: var(--radius-lg);
    }
</style>