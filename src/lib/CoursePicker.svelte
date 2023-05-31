<script lang="ts">
    import CourseGroup from "./CourseGroup.svelte";
    import CourseHeader from "./CourseHeader.svelte";
    import CourseInfo from "./CourseInfo.svelte";
    import type { Config, Course } from "./types";
    import { as_instance } from "./types";

    let config: Config<Course> = {
        num_semesters: 4,
        groups: [
            {
                name: "1. AF",
                id: "af-1",
                courses: [
                    { name: "Deutsch", id: "de", tags: ["lk"] },
                    { name: "Englisch", id: "en", tags: ["lk"] },
                    { name: "Franzoesisch", id: "frz", tags: ["lk"] },
                    { name: "Latein", id: "lat", tags: [] },
                    { name: "Russisch", id: "rus", tags: [] },
                    { name: "Spanisch", id: "sp", tags: [] },
                    { name: "Musik", id: "mus", tags: ["lk"] },
                    { name: "Kunst", id: "kun", tags: ["lk"] },
                    { name: "Darstellendes Spiel", id: "ds", tags: ["lk"] },
                ],
            },
            {
                name: "2. AF",
                id: "af-2",
                courses: [
                    { name: "Politikwissenschaft", id: "pw", tags: ["lk"] },
                    { name: "Geschichte", id: "ges", tags: ["lk"] },
                    { name: "Geographie", id: "geo", tags: ["lk"] },
                    { name: "Phylosophie", id: "philo", tags: [] },
                ],
            },
            {
                name: "3. AF",
                id: "af-3",
                courses: [
                    { name: "Mathematik", id: "mat", tags: ["lk"] },
                    { name: "Physik", id: "phy", tags: ["lk"] },
                    { name: "Chemie", id: "chem", tags: ["lk"] },
                    { name: "Biologie", id: "bio", tags: ["lk"] },
                    { name: "Informatik", id: "inf", tags: [] },
                ],
            },
            {
                name: "Sport",
                id: "spo",
                courses: [
                    { name: "Sport", id: "spo" },
                    { name: "Sport Theorie", id: "spo-th", offset: 2 },
                    { name: "Ski und Snowboard", id: "ski", offset: 1, num_semesters: 1 },
                ],
            },
            {
                name: "Ensemblemusik",
                id: "ensemble",
                courses: [
                    { name: "Chor", id: "chor" },
                    { name: "Blaeser", id: "blaeser" },
                ],
            },
            {
                name: "Zusatzkurse",
                id: "zusatz",
                courses: [
                    { name: "CCC", id: "ccc" },
                    { name: "Debating", id: "debating" },
                    { name: "Digitale Welten", id: "dw", num_semesters: 2 },
                ],
            },
            {
                name: "Seminarkurse",
                id: "sem",
                courses: [
                    { name: "Neurowissenschaften", id: "neuro", num_semesters: 2 },
                    { name: "Doping", id: "doping", num_semesters: 2 },
                    { name: "Finanzmathematik", id: "fima", num_semesters: 2 },
                ],
            }
        ],
    };

    let instance = as_instance(config);
</script>

<div class="course-picker bg-gray-900 w-full min-h-screen text-slate-100 ">
    <CourseInfo />
    <div class="p-10">
        <div class="sticky top-0">
            <CourseHeader num_semesters={config.num_semesters}/>
        </div>
        <div class="course-groups">
            {#each instance.groups as group}
                <CourseGroup group={group} num_semesters={config.num_semesters}/>
            {/each}
        </div>
    </div>
</div>

<style>
/* use :not(:last-child) and container query to make seperator */
</style>

