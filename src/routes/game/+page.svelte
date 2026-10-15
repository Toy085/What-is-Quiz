<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    let ingame: boolean = true
    let cellDes: Array<string> = []
    cellDes.push("Testy")
    cellDes.push("Can i get a number 5?")
    cellDes.push("One term for talking trash about someone is throwing this, like a big elm tree might do.")
</script>

{#if ingame}
    <Gameboard cellDescription={cellDes}/>
{/if}