<script lang="ts">
    import { all_selected, get_sem_arr, get_sem_idx } from "./types";
    import type { CourseInstance } from "./types";
    import { info_course } from "./store";

    export let course: CourseInstance;
    export let num_semesters: number;

    $: items = get_sem_arr(course, num_semesters);
</script>

<div class="course flex flex-wrap gap-1">
    <button
        class="course-name bg-slate-700 rounded p-2 cursor-pointer w-20 grow"
        on:click={_ => { let sel = all_selected(course); for(let i = 0; i < course.selected.length; i++) { course.selected[i] = !sel } }}
    >
        {course.course.name}
    </button>

    <button
        class="w-12 p-2 bg-slate-700 rounded"
        on:click={_ => info_course.set(course.course)}>
        &#9432;
    </button>

    <select name="prf" class="prf-selector p-2 grow-0 w-20 text-s text-inherit bg-slate-700 rounded">
        <option value="empty"></option>
        <option value="lf-1">1. LF</option>
        <option value="lf-2">2. LF</option>
        <option value="prf-3">3. PfF</option>
        <option value="prf-4">4. PfF</option>
        <option value="pk-5">5. PK</option>
    </select>
    <div class="semesters-container flex justify-stretch gap-1 grow-[5]">
        {#each items as v, i}
            {@const id = get_sem_idx(course, num_semesters, i)}
            <button
                class="semester w-full rounded p-2 cursor-pointer text-center text-transparent"
                class:bg-slate-500={v === "non-selected"}
                class:bg-transparent={v === "empty"}
                class:bg-red-500={v === "selected"}
                on:click={_ => { course.selected[id] = !course.selected[id]; console.log(id) }}
            >
                __
            </button>
        {/each}
    </div>
</div>

