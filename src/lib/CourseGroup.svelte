<script lang="ts">
    import Course from "./Course.svelte";
    import type { CourseGroup, CourseInstance } from "./types";

    export let group: CourseGroup<CourseInstance>;
    export let num_semesters: number;
</script>

<div class="course-group select-none">
    <div class="group-name text-xl font-bold">{group.name}</div>

    <div class="courses border-2 border-slate-500 rounded-lg p-1 m-1 grid gap-1">
        {#each group.courses as course}
            <Course course={course} num_semesters={num_semesters}/>
        {/each}
    </div>
</div>

