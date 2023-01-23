import { writable } from "svelte/store";

const settings = writable({
    cmsUrl: 'http://localhost:1337'
});

const count = writable([
    { name: 'Shirt' },
    { name: 'Hoodie' },
]);

export {
    settings,
    count
}
