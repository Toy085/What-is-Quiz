<script lang="ts">
    function quizUpload() {
        // Add funconality
    }
</script>

<h1 class="text-2xl font-bold mb-4 mt-6 text-center">Welcome to "What is Quiz?"</h1>

<div class="flex gap-2 justify-center items-center">
    <a href="/create"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Create</button></a>

    <input type="file" id="jsonInput" accept=".json" onchange={quizUpload} class="hidden">
    <label for="jsonInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Host</label>

    <a href="/join"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Join</button></a>
</div>
