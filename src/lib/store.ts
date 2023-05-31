import { writable } from "svelte/store";
import type { Course } from "./types";

export const info_course = writable<Course | undefined>(undefined);

