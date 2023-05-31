
type KnownTags = "lk";

type Course = {
    name: string,
    id: string,
    tags?: (string | KnownTags)[],

    offset?: number,            // negative of right align
    num_semesters?: number,     // number of semesters (all if undefined)
    descr?: CourseDescription,
};

type CourseDescription = {
    info_text: string,
    image_url?: string,
};

type CourseInstance = {
    course: Course,
    selected: boolean[],
};

function make_instance(course: Course, num_semesters: number): CourseInstance {
    const selected: boolean[] = new Array(course.num_semesters ?? num_semesters).fill(false);
    return { course, selected };
}

type CourseGroup<T> = {
    name: string,
    id: string,
    courses: T[],

    note?: string,
    max_usable?: number,        // maximum number of usable semesters (on report card) in the group
};

function instance_from_group(g: CourseGroup<Course>, num_semesters: number): CourseGroup<CourseInstance> {
    return {
        name: g.name,
        id: g.id,
        courses: g.courses.map(v => make_instance(v, num_semesters)),
        note: g.note,
        max_usable: g.max_usable,
    };
}

type Config<T> = {
    num_semesters: number,
    
    groups: CourseGroup<T>[],
};

function as_instance(c: Config<Course>): Config<CourseInstance> {
    return {
        num_semesters: c.num_semesters,
        groups: c.groups.map(v => instance_from_group(v, c.num_semesters)),
    };
}

function is_instance<T>(c: Config<T>): T extends CourseInstance ? true : false {
    return (c.groups[0]?.courses[0] as any | undefined)?.selected;
}

function get_sem_idx(c: CourseInstance, num_semesters: number, idx: number): number | undefined {
    let offset = c.course.offset ?? 0;
    if(offset < 0) { offset = num_semesters + offset };

    let res = idx - offset;
    return (res < 0 || res >= c.selected.length) ? undefined : res;
}

function toggle_sem_idx(c: CourseInstance, num_semesters: number, idx: number) {
    let id = get_sem_idx(c, num_semesters, idx);
    c.selected[id] = !c.selected[id];
}

function get_sem_arr(c: CourseInstance, num_semesters: number): ("selected" | "non-selected" | "empty")[] {
    let res = new Array(num_semesters).fill(false).map((_, i) => {
        let id = get_sem_idx(c, num_semesters, i);
        if(id !== undefined) return c.selected[id] ? "selected" : "non-selected";
        else return "empty";
    });
    return res;
}

function all_selected(c: CourseInstance): boolean {
    return c.selected.reduce((pv, cv) => pv && cv)
}

export type {
    KnownTags,
    Course,
    CourseGroup,
    Config,

    CourseInstance,
};

export {
    as_instance,
    is_instance,

    get_sem_arr,
    get_sem_idx,
    toggle_sem_idx,
    all_selected,
};

