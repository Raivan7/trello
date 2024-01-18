class StorageService {
    getStorageItem(storageKey) {
        const item = localStorage.getItem(storageKey);

        if (!item) {
            return item;
        }

        return JSON.parse(item);
    };

    setStorageItem(storageKey, storageValue) {
        localStorage.setItem(storageKey, JSON.stringify(storageValue));
    };
}

const storageService = new StorageService();

export default storageService;
