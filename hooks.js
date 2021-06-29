const { AsyncLocalStorage } = require("async_hooks");

const KEY = "key"
class LocalStorage {
    #asyncLocalStorage

    constructor() {
        this.#asyncLocalStorage = new AsyncLocalStorage();
    }

    initialize(func) {
        this.#asyncLocalStorage.run(new Map(), func);
    }

    get() {
        let localStorageValue = this.#asyncLocalStorage.getStore().get(KEY);

        if (!localStorageValue) {
            const setValue = `${Math.random()}`; // Call dynamodb here
            this.#asyncLocalStorage.getStore().set(KEY, setValue)
            localStorageValue = setValue;
        }

        return localStorageValue
    }
}

module.exports = {
    LocalStorage,
}
