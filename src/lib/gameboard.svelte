<script lang="ts">
  interface Props {
    creation: boolean;
  }
  let { creation = false, cellDescription = Array<String> } = $props();

  let activeCell = $state<number | null>(null);
  let editTextCell = $state()

  const cells = Array.from({ length: 25 }, (_, i) => i);

  function editCell(index: number): void {
    if (!creation) {
      console.log("Not in Creation mode");
      return;
    }
    let cell = cells.at(index);
    activeCell = activeCell === index ? null : index;
    return;
  }
    function openCell(index: number): void {
    if (creation) {editCell(index)}
    let cell = cells.at(index);
    activeCell = activeCell === index ? null : index;
    return;
  }
  function closeEditCell(): void {
    activeCell = null
    editTextCell.value = ""
  }
</script>

<div class="flex flex-col items-center relative gap-2.5">
  <div class="grid gap-2.5 justify-center grid-cols-[repeat(5,200px)]">
    {#each Array(5) as index}
      <div class="flex justify-center items-center cursor-pointer rounded-lg w-50 h-12.5 bg-blue-700 hover:bg-blue-900" data-index={index}>
        <h2 class="text-2xl font-bold text-white">Lorem</h2>
      </div>
    {/each}
  </div>

  <div class="grid gap-2.5 justify-center grid-cols-[repeat(5,200px)]" id="gameBoard">
    {#each cells as index}
      <button type="button" class="flex justify-center items-center cursor-pointer rounded-lg w-50 h-25 bg-blue-500 hover:bg-blue-700" class:edit-cell={activeCell === index} data-index={index} onclick={() => openCell(index)}>
        <p class="text-xl font-normal text-white">
          ${(Math.floor(index / 5) + 1) * 100}
        </p>
      </button>
    {/each}
  </div>
</div>

<div class=" flex justify-center items-center rounded-lg w-[70vw] h-[60vh] absolute top-[15%] left-[15%] bg-blue-500 p-5" class:invisible={activeCell === null}>
  {#if creation}
  <input type="text" bind:this={editTextCell} class="w-full h-full m-5">
  <button class=" absolute top-0 right-0" onclick={() => closeEditCell()}>Close</button> <!--Replace with icon-->
  {:else if !creation}
  <p>{cellDescription}</p>
  {/if}
</div>