<script lang="ts">
    import { info_course as course } from "./store";

    let dialog: HTMLDialogElement;

    $: if(dialog && $course) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={_ => course.set(undefined)}
    on:click|self={_ => dialog.close()}
    class="text-inherit bg-transparent backdrop:bg-opacity-10 mr-0 p-0 pr-4
        bg-gradient-to-l to-transparent from-slate-900 pl-20 lg:w-[30rem] md:w-1/2 h-screen top-0 fixed"
>
    <div class="course-info rounded bg-slate-700 p-4 h-full relative flex">
        <div class="grow">
            {#if $course}
                <h1 class="heading text-4xl font-bold">{$course.name}</h1>
                {#if $course.descr}
                    {#if $course.descr.image_url}
                        <img src={$course.descr.image_url} alt={`course-${$course.id}`} />
                    {/if}
                    <div class="course-info">
                        {$course.descr.info_text}
                    </div>
                {:else}
                    <div>no info</div>
                {/if}
            {/if}
        </div>

        <button
            class="close-btn bg-slate-800 m-2 w-8 h-8 rounded grow-0"
                on:click={_ => dialog.close()}
        >
            &#x2715;
        </button>
    </div>
</dialog>

<style>
    dialog[open] {
        animation: slide-in 0.125s ease-out;
    }

    @keyframes slide-in {
        from {
            transform: translate(100rem, 0);
        }
        to {
            transform: translate(0, 0);
        }
    }
</style>


