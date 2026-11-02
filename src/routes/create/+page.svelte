<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    import Returnbutton from '$lib/assets/returnbutton.svelte';

    let categoriesText = $state<string[]>(Array(5).fill("Lorem"));
    let questionText = $state<string[]>(Array(25).fill(""));
    let creationMode: boolean = $state(false);

    if (localStorage.getItem('tempQuiz')) {
        const tempQuiz = JSON.parse(localStorage.getItem('tempQuiz') || '{}');
        categoriesText = tempQuiz.categoriesText || Array(5).fill("Lorem");
        questionText = tempQuiz.questionText || Array(25).fill("");
    }

    function saveQuizTemp() {
        const quizData = { categoriesText, questionText };
        localStorage.setItem('tempQuiz', JSON.stringify(quizData));
    }
    function exportQuiz() {
        // Add funconality
    }
</script>

<h1 class="text-2xl font-bold m-4 text-center">Hello!</h1>
{#if creationMode}
    <Gameboard creation={true} bind:QuestionText={questionText} bind:CategoriesText={categoriesText} />

    <button onclick={saveQuizTemp} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 rounded cursor-pointer">Save Quiz</button>
    <button onclick={exportQuiz} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 mt-2 rounded cursor-pointer">Export Quiz</button>
{:else}
    <div class="flex flex-row m-50">
        <input type="file" id="jsonInput" accept=".json" onchange={quizUpload} class="hidden">
        <label for="jsonInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Edit an old Quiz</label>
        
        <button onclick={creationMode = true} class="bg-blue-500 hover:bg-blue-700 m-auto block text-white font-bold p-2 rounded cursor-pointer">Create a new Quiz</button>
    </div>
{/if}

<Returnbutton />