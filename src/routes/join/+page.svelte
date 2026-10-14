<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    let ingame: boolean = true
    let cellDes: Array<string> = []
    cellDes.push("Testy")
    cellDes.push("Can i get a number 5?")
</script>

{#if ingame}
<Gameboard cellDescription={cellDes}/>
{/if}