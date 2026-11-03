<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    import Returnbutton from '$lib/assets/returnbutton.svelte';

    let categoriesText = $state<string[]>(Array(5).fill("Lorem"));
    let questionText = $state<string[]>(Array(25).fill(""));
    let creationMode: boolean = $state(false);

    if (localStorage?.getItem('localQuiz')) {
        const tempQuiz = JSON.parse(localStorage.getItem('localQuiz') || '{}');
        categoriesText = tempQuiz.categoriesText || Array(5).fill("Lorem");
        questionText = tempQuiz.questionText || Array(25).fill("");
    }

    function saveQuizTemp() {
        const quizData = { categoriesText, questionText };
        localStorage.setItem('localQuiz', JSON.stringify(quizData));
    }

    function exportQuiz() {
        const quizData = { categoriesText, questionText };
        let tempQuiz = JSON.stringify(quizData);
        const blob = new Blob([tempQuiz], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quiz.WhatIsQuiz';
        a.click();
        URL.revokeObjectURL(url);
    }
    function clearQuiz() {
        if(!window.confirm("Doing this will permantly delete your quiz.")) {return;}
        categoriesText = Array(5).fill("Lorem");
        questionText = Array(25).fill("");
        const quizData = { categoriesText, questionText };
        localStorage.setItem('localQuiz', JSON.stringify(quizData));
    }
</script>

<h1 class="text-2xl font-bold m-4 text-center">Hello!</h1>

{#if creationMode}
    <Gameboard creation={true} bind:QuestionText={questionText} bind:CategoriesText={categoriesText} />

    <div class="flex justify-center items-center">
        <button onclick={saveQuizTemp} class="bg-blue-500 hover:bg-blue-700 m-auto inline text-white font-bold p-2 rounded cursor-pointer">Save Quiz</button>
        <button onclick={exportQuiz} class="bg-blue-500 hover:bg-blue-700 m-auto inline text-white font-bold p-2 rounded cursor-pointer">Export Quiz</button>
        <button onclick={clearQuiz} class="bg-white hover:bg-gray-200 m-auto inline text-red-700 font-bold p-2 rounded cursor-pointer">Clear Quiz</button>
    </div>
{:else}
    <div class="flex flex-row m-5 justify-center items-center gap-5">
        <input type="file" id="jsonInput" accept=".WhatIsQuiz" onchange={quizUpload} class="hidden">
        <label for="jsonInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Edit an old Quiz</label>
        
        <button onclick={creationMode = true} class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded cursor-pointer">Create a new Quiz</button>
    </div>
{/if}

<Returnbutton />