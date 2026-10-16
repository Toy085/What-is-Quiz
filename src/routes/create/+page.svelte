<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';

    function saveQuiz() {
        // Add funconality
    }
</script>

<h1 class="text-2xl font-bold m-4 text-center">Hello!</h1>

<Gameboard creation={true}/>

<button onclick={saveQuiz} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 rounded cursor-pointer">Save Quiz</button>