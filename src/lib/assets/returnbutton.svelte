<script lang="ts">
    import homeicon from "$lib/assets/icons/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
    let { text = "Return", showIcon = true } = $props();
</script>
<a href="/">
    <button class="bg-blue-500 hover:bg-blue-700 text-white block m-auto mt-5 font-bold py-2 px-4 rounded cursor-pointer">
        {text}
        {#if showIcon}
        <img alt=" home" src={homeicon} class="inline">
        {/if}
    </button>
</a>
