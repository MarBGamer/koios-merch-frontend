import { writable } from "svelte/store";

const settingsStore = writable({
    cmsUrl: 'http://localhost:1337'
});

const filtersStore = writable({
    category: undefined,
});

export {
    settingsStore,
    filtersStore,
}
