<script lang="ts">
  let props = $props();

  const cells = Array.from({ length: 25 }, (_, i) => i);
</script>

<div class="gameboard-container">
  <div class="gameboard-titles">
    {#each Array(5) as index}
      <div class="cell-title bg-blue-700 hover:bg-blue-900" data-index={index}>
        <h2 class="text-2xl font-bold text-white">Lorem</h2>
      </div>
    {/each}
  </div>

  <div class="gameboard" id="gameBoard">
    {#each cells as index}
      <div class="cell bg-blue-500 hover:bg-blue-700" data-index={index}>
        <p class="text-xl font-normal text-white">
          ${(Math.floor(index / 5) + 1) * 100}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .gameboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .gameboard-titles,
  .gameboard {
    display: grid;
    grid-template-columns: repeat(5, 200px);
    gap: 10px;
    justify-content: center;
  }

  .gameboard {
    grid-template-rows: repeat(5, 100px);
  }

  .cell-title {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: var(--radius-lg);
  }

  .cell {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: var(--radius-lg);
  }
</style>
