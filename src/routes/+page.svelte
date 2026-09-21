<script lang="ts">
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Welcome to "What is Quiz?"</h1>

<div class="flex gap-2 justify-center items-center">
    <a href="/create"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button></a>

    <input type="file" id="jsonInput" accept=".json" class="hidden">
    <label for="jsonInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Host</label>
    
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join</button>
</div>

<style>
    :global(body) {
        background-color: lightblue;
        margin: 0;
        padding: 20px;
    }
    button {
        cursor: pointer;
    }
</style>