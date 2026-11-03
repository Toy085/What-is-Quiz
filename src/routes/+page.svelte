<script lang="ts">
  import { goto } from "$app/navigation";

    function quizUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const quizData = JSON.parse(e.target?.result as string);
                    localStorage.setItem('localQuiz', JSON.stringify(quizData));
                    goto("/game");
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    return error;
                }
            };
            reader.readAsText(file);
            return;
        }
        console.error("No file selected");
    }
</script>

<h1 class="text-2xl font-bold mb-4 mt-6 text-center">Welcome to "What is Quiz?"</h1>

<div class="flex gap-2 justify-center items-center">
    <a href="/create"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Create / Edit</button></a>

    <input type="file" id="jsonInput" accept=".WhatIsQuiz" onchange={quizUpload} class="hidden">
    <label for="jsonInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Host</label>

    <a href="/join"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Join</button></a>
</div>
