<script lang="ts">
    import Gameboard from '$lib/gameboard.svelte';
    let ingame: boolean = false
</script>

{#if ingame}
<Gameboard />
{/if}