<script lang="ts">
  import closeIcon from "$lib/assets/icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
  interface Props {
    creation: boolean;
    QuestionText: Array<string>;
    CategoriesText: Array<string>;
  }
  let { creation = false, QuestionText = ["Lorem Ipsum sit"], CategoriesText = ["Lorem Ipsum sit"]} = $props();

  const cellTypes = {
    text: 0,
    title: 1,
  };

  let activeCell = $state<number | null>(null);
  let editTextCell: any = $state()
  let currentCellType = $state<number>(cellTypes.text);

  const cells = Array.from({ length: 25 }, (_, i) => i);
  const titleCells = Array.from({ length: 5 }, (_, i) => i);

  function editCell(index: number, cellType: number): void {
    currentCellType = cellType
    if (cellType === cellTypes.text) {
      let cell = cells.at(index);
    } 
    else {
      let cell = titleCells.at(index);
    }
    activeCell = activeCell === index ? null : index;
    return;
  }

  function openCell(index: number, cellType: number): void {
    currentCellType = cellType
    if (creation) {editCell(index, cellType); return;}

    if (cellType === cellTypes.text) {
      let cell = cells.at(index);
    } 
    else {
      let cell = titleCells.at(index);
    }

    activeCell = activeCell === index ? null : index;
    return;
  }

  function closeEditCell(): void {
    editTextCell.value = ""
    activeCell = null
  }
</script>

<div class="flex flex-col items-center relative gap-2.5 m-5">
  <div class="grid gap-2.5 justify-center grid-cols-[repeat(5,200px)]">
    {#each titleCells as index}
      <button class="flex justify-center items-center cursor-pointer rounded-lg w-50 h-min-13 h-max-25 bg-blue-700 transition-all ease-in-out delay-50" class:hover:bg-blue-900={creation} data-index={index} onclick={() => openCell(index, cellTypes.title)}>
        <h2 class="text-xl font-bold text-white m-1.5">{CategoriesText[index] != null ? CategoriesText[index] : CategoriesText[0]}</h2>
      </button>
    {/each}
  </div>

  <div class="grid gap-2.5 justify-center grid-cols-[repeat(5,200px)]" id="gameBoard">
    {#each cells as index}
      <button type="button" class="flex justify-center items-center cursor-pointer rounded-lg w-50 h-25 bg-blue-500 hover:bg-blue-700 hover:shadow transition-all ease-in-out delay-50" data-index={index} onclick={() => openCell(index, cellTypes.text)}>
        <p class="text-xl font-normal text-white">
          ${(Math.floor(index / 5) + 1) * 100}
        </p>
      </button>
    {/each}
  </div>
</div>

<!--Big Cell-->
<div class="flex justify-center items-center rounded-lg w-[70vw] h-[60vh] transform-[translate(-50%,-50%)] absolute top-[40%] left-[50%] bg-blue-600 p-5" class:invisible={activeCell === null || currentCellType != cellTypes.text}>
  {#if creation}
    <textarea maxlength="125" bind:this={editTextCell} class="w-full h-full font-bold text-7xl text-center resize-none bg-transparent"></textarea>
    <button class="absolute top-0 right-0" onclick={() => closeEditCell()}>
      <img alt="close" src={closeIcon} class="w-12">
    </button>
  {:else if !creation}
    <p class="font-bold text-7xl text-center">{QuestionText[activeCell != null ? activeCell : 0]}</p>
  {/if}
</div>

<!--Big-small Cell-->
<div class="flex justify-center items-center rounded-lg w-[60vw] h-[30vh] transform-[translate(-50%,-50%)] absolute top-[40%] left-[50%] bg-blue-800 p-5" class:invisible={activeCell === null || currentCellType != cellTypes.title}>
  {#if creation}
    <textarea maxlength="40" bind:this={editTextCell} class="w-full h-[20vh] font-bold text-7xl text-center resize-none bg-transparent"></textarea>
    <button class="absolute top-0 right-0" onclick={() => closeEditCell()}>
      <img alt="close" src={closeIcon} class="w-12">
    </button>
    <!-- No need for expanding Categories -->
  {/if}
</div>