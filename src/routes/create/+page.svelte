<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    import Returnbutton from '$lib/assets/returnbutton.svelte';

    let QuizData = $state();
    let creationMode: boolean = $state(false);

    function saveQuizTemp() {
        // Add funconality
    }
    function exportQuiz() {
        // Add funconality
    }
</script>

<h1 class="text-2xl font-bold m-4 text-center">Hello!</h1>
{#if creationMode}
    <Gameboard creation={true}/>

    <button onclick={saveQuizTemp} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 rounded cursor-pointer">Save Quiz</button>
{:else}
    <div class="flex flex-row m-50">
        <input type="file" id="jsonInput" accept=".json" onchange={quizUpload} class="hidden">
        <label for="jsonInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Edit an old Quiz</label>
        
        <button onclick={creationMode = true} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 rounded cursor-pointer">Create a new Quiz</button>
    </div>
{/if}
<Returnbutton />