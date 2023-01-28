import { writable } from "svelte/store";

const settingsStore = writable({
    cmsUrl: 'http://localhost:1337',
    baseTitle: '| KOIOS Merch',
});

const filtersStore = writable({
    category: undefined,
    page: 1,
});

export {
    settingsStore,
    filtersStore,
}
