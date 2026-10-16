<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';

    let QuizData = $state();

    function saveQuizTemp() {
        // Add funconality
    }
    function exportQuiz() {
        // Add funconality
    }
</script>

<h1 class="text-2xl font-bold m-4 text-center">Hello!</h1>

<Gameboard creation={true}/>

<button onclick={saveQuizTemp} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 rounded cursor-pointer">Save Quiz</button>