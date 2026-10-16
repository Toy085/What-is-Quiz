<script lang="ts">
    import Returnbutton from "$lib/assets/returnbutton.svelte";
</script>

<h1 class="text-4xl text-center font-bold m-5">Join a Game!</h1>

<form method="POST" action="?/join" class="flex flex-col bg-blue-700/10 w-75 m-auto mt-5 p-5 gap-2 rounded-2xl">
    <label for="gId">Game ID:</label>
    <input type="text" id="gId" name="gId" placeholder="ABC123" minlength="6" class="bg-amber-50/25" required>
    <label for="uName">Username:</label>
    <input type="text" id="uName" name="uName" placeholder="John Doe" maxlength="32" class="bg-amber-50/25" required>
    <label for="pwd">Password (if required):</label>
    <input type="password" id="pwd" name="pwd" class="bg-amber-50/25">

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Join</button>
</form>

<Returnbutton />