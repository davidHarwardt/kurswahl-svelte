<script lang="ts">
    export let num_semesters: number;
</script>

<div class="p-2 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent select-none">
    <div class="bg-slate-800 rounded-lg p-1 m-1">
        <div class="course flex flex-wrap gap-1">
            <div class="course-name p-2 grow w-20">Kurs</div>

            <div class="course-exams p-2 w-12 text-transparent"></div>

            <div class="course-exams p-2 grow-0 w-20">Pf</div>

            <div class="flex justify-stretch gap-1 grow-[5]">
                {#each { length: num_semesters } as _, i}
                    <div class="course-semester w-full p-2 text-center">{i + 1}.</div>
                {/each}
            </div>
        </div>
    </div>
</div>

