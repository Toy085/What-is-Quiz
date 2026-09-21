<h1 class="text-2xl font-bold mb-4 text-center">Hello!</h1>
<div class="gameboard" id="gameBoard">
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="0"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="1"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="2"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="3"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="4"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="5"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="6"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="7"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="8"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="9"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="10"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="12"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="13"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="14"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="15"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="16"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="17"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="18"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="19"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="20"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="21"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="22"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="23"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="24"></div>
    <div class="cell bg-blue-500 hover:bg-blue-700" data-index="25"></div>
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