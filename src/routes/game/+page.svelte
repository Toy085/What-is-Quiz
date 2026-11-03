<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    let ingame: boolean = true

    let categoriesText = $state<string[]>(Array(5).fill("Lorem"));
    let questionText = $state<string[]>(Array(25).fill(""));

    if (localStorage?.getItem('localQuiz')) {
        const tempQuiz = JSON.parse(localStorage.getItem('localQuiz') || '{}');
        categoriesText = tempQuiz.categoriesText || Array(5).fill("Lorem");
        questionText = tempQuiz.questionText || Array(25).fill("");
    }
</script>
<h1 class="text-6xl font-bold m-5 text-center">Host</h1>
{#if ingame}
    <Gameboard CategoriesText={categoriesText} QuestionText={questionText}/>
{/if}